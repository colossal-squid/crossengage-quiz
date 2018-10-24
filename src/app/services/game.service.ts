import { Injectable, Inject } from '@angular/core';
import { UserModel } from 'src/app/services/user.service';
import { AnswerModel, QuestionAndAnswerModel, QuestionsService, GameQuestion } from 'src/app/services/questions.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { SettingsService } from 'src/app/settings.service';

interface State {
  totalScore: number;
  questionsAnswered: FixedAnswer[];
  timeStarted: number;
  user: UserModel;
}

export interface FixedAnswer {
  answeredCorrectly: boolean;
  question: string;
  chosenAnswer: string;
  rightAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor (private questionsService: QuestionsService,
               private settings: SettingsService,
               @Inject('WINDOW') window: Window) {
      this.windowRef = window;
      const lastState = window.sessionStorage.getItem(GameService.sessionStorageKey);
      if (!!lastState) {
        this.state = JSON.parse(lastState);
      }
  }

  get score() {
    return this.state ? `${(this.state.totalScore )} XP` : '-';
  }

  get questionsAnswered(): FixedAnswer[] {
    return this.state ? this.state.questionsAnswered : [];
  }
  private static readonly sessionStorageKey = 'rg_quiz_game';

  private state: State;
  private allGames: State[] = [];
  private currentQuestion: QuestionAndAnswerModel;
  private windowRef: Window;

  public start(userModel: UserModel) {
    this.state = {
      user: userModel,
      timeStarted: Date.now(),
      questionsAnswered: [],
      totalScore: 0
    };
    this.windowRef.sessionStorage.setItem(GameService.sessionStorageKey, JSON.stringify(this.state));
  }

  private filterAnswersByDIfficulty(answers: AnswerModel[], answerId: string): AnswerModel[] {
    const answersCount = this.settings.DIFFICULTY_SETTINGS.find( setting => setting.id === this.state.user.level ).answers;
    const correctAnswer = answers.find((answer: AnswerModel) => answer.id === answerId);
    const filtered = [correctAnswer];
    let i = 0;
    while (filtered.length < answersCount && i < answers.length) {
      if (filtered.indexOf(answers[i]) === -1) {
        filtered.push(answers[i]);
      }
      i++;
    }
    return filtered;
  }

  public getQuestion(): Observable<GameQuestion> {
    return this.questionsService.getQuestionAndAnswers().pipe(
      map((res: QuestionAndAnswerModel) => {
        this.currentQuestion = res;
        return <GameQuestion>{
          question: res.question,
          answers: this.filterAnswersByDIfficulty(res.answers, res.answerId)
        };
      })
    );
  }

  public giveAnswer(answerId) {
    const isCorrect = answerId === this.currentQuestion.answerId;
    this.state.questionsAnswered.push({
      answeredCorrectly: isCorrect,
      question: this.currentQuestion.question,
      chosenAnswer: this.currentQuestion.answers.find(q => q.id === answerId).label,
      rightAnswer: this.currentQuestion.answers.find(q => q.id === this.currentQuestion.answerId).label,
    });
    this.state.totalScore += isCorrect ? 100 : -20;
    this.windowRef.sessionStorage.setItem(GameService.sessionStorageKey, JSON.stringify(this.state));
    return isCorrect;
  }

  public reset() {
    this.state = null;
  }


}
