import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from 'src/app/initial-page/initial-page.component';
import { QuizPageComponent } from 'src/app/quiz-page/quiz-page.component';
import { SummaryPageComponent } from 'src/app/summary-page/summary-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full'},
  { path: 'initial',  component: InitialPageComponent },
  { path: 'quiz',  component: QuizPageComponent },
  { path: 'summary',  component: SummaryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
