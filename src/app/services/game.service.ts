import { Injectable, Inject } from '@angular/core';
import { UserModel } from 'src/app/services/user.service';
import { AnswerModel, QuestionAndAnswerModel, QuestionsService, GameQuestion } from 'src/app/services/questions.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

interface State {
  totalScore: number,
  questionsAnswered: FixedAnswer[];
  timeStarted: number;
  user: UserModel; 
}

export interface FixedAnswer {
  answeredCorrectly: boolean,
  question: string;
  chosenAnswer: string;
  rightAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private state:State;
  private allGames: State[] = [];
  private currentQuestion: QuestionAndAnswerModel;
  private windowRef: Window;
  private static readonly sessionStorageKey = 'rg_quiz_game';

  constructor (private questionsService:QuestionsService,
    @Inject('WINDOW') window:Window) {
      this.windowRef = window;
      let lastState = window.sessionStorage.getItem(GameService.sessionStorageKey);
      if (!!lastState) {
        this.state = JSON.parse(lastState);
      }
  }

  public start(userModel:UserModel) {
    this.state = {
      user: userModel,
      timeStarted: Date.now(),
      questionsAnswered: [],
      totalScore: 0
    };
    this.windowRef.sessionStorage.setItem(GameService.sessionStorageKey, JSON.stringify(this.state));
  }

  public getQuestion():Observable<GameQuestion> {
    return this.questionsService.getQuestionAndAnswers().pipe(
      map((res:QuestionAndAnswerModel) => {
        this.currentQuestion = res;
        return <GameQuestion>{
          question: res.question,
          answers: res.answers
        };
      })
    );
  }

  public giveAnswer(answerId) {
    let isCorrect = answerId === this.currentQuestion.answerId;
    this.state.questionsAnswered.push({
      answeredCorrectly: isCorrect,
      question: this.currentQuestion.question,
      chosenAnswer: this.currentQuestion.answers.find(q=>q.id === answerId).label,
      rightAnswer: this.currentQuestion.answers.find(q=>q.id === this.currentQuestion.answerId).label,
    });
    this.state.totalScore += isCorrect ? 100 : -20;
    this.windowRef.sessionStorage.setItem(GameService.sessionStorageKey, JSON.stringify(this.state));
    return isCorrect;
  }

  get score() {
    return this.state ? `${(this.state.totalScore )} XP` : '-';
  }
  
  get questionsAnswered():FixedAnswer[]{
    return this.state.questionsAnswered;
  }

  public done() {
    
  }

  
}
