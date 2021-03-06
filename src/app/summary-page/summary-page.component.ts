import { Component } from '@angular/core';
import { GameService, FixedAnswer } from 'src/app/services/game.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent {

  constructor(private gameService: GameService) { }

  get allAnswers() {
    return this.gameService.questionsAnswered;
  }

  get rightAnswers() {
    return this.gameService.questionsAnswered.filter((q: FixedAnswer) => q.answeredCorrectly);
  }
}
