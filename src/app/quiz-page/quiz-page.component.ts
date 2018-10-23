import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/settings.service';
import { GameService } from 'src/app/services/game.service';
import { GameQuestion, AnswerModel } from 'src/app/services/questions.service';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  public question:string = '';
  public answers:AnswerModel[] = [];
  public selectedAnswer: string;

  private correctAnswerId:string;

  constructor(private gameService:GameService,
              private userService:UserService,
              private snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    this.question = '';
    this.answers = [];
    this.gameService.getQuestion().subscribe((res:GameQuestion)=>{
      this.question = res.question;
      this.answers = res.answers;
      this.selectedAnswer = this.answers[0].id;
    }, err=>{
      this.router.navigate([`/${APP_ROUTES.OFFLINE}`]);
    });
  }

  validateAnswer() {
    const valid = this.gameService.giveAnswer(this.selectedAnswer);
    if (valid) {
      this.showOkScreen();
    } else {
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