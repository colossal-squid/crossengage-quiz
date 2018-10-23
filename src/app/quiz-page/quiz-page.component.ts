import { Component, OnInit } from '@angular/core';
import { QuestionsService, AnswerModel } from 'src/app/services/questions.service';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/settings.service';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  public question:string = '';
  public answers:any[] = [];
  public selectedAnswer: string;

  private correctAnswerId:string;

  constructor(private questionsService:QuestionsService,
              private userService:UserService,
              private snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    this.question = '';
    this.answers = [];
    this.questionsService.getQuestionAndAnswers().subscribe(res=>{
      this.question = res.question;
      this.answers = res.answers;
      this.correctAnswerId = res.answerId;
      this.selectedAnswer = this.answers[0].id;
    }, err=>{
      this.router.navigate([`/${APP_ROUTES.OFFLINE}`]);
    });
  }

  validateAnswer() {
    if (this.selectedAnswer === this.correctAnswerId) {
      this.userService.addScore(1);
      this.showOkScreen();
    } else {
      this.userService.addScore(-1);
      this.showMistakeScreen();
    }
    this.loadQuestion();
  }

  showOkScreen() {
    this.snackBar.open('✅ That is right!', undefined, {
      duration: 2000,
    });
  }

  showMistakeScreen() {
    this.snackBar.open('❌ Nope!', undefined, {
      duration: 2000,
    });
  }

}