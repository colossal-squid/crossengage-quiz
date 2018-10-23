import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from 'src/app/initial-page/initial-page.component';
import { QuizPageComponent } from 'src/app/quiz-page/quiz-page.component';
import { SummaryPageComponent } from 'src/app/summary-page/summary-page.component';
import { APP_ROUTES } from 'src/app/settings.service';
import { RoutesGuard } from 'src/app/routes.guard';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { OfflinePageComponent } from 'src/app/offline-page/offline-page.component';

const routes: Routes = [
  { path: '', redirectTo: `/${APP_ROUTES.INITIAL}`, pathMatch: 'full'},
  { path: APP_ROUTES.INITIAL,  component: InitialPageComponent, canActivate: [RoutesGuard] },
  { path: APP_ROUTES.QUIZ,  component: QuizPageComponent, canActivate: [RoutesGuard] },
  { path: APP_ROUTES.SUMMARY,  component: SummaryPageComponent, canActivate: [RoutesGuard] },
  { path: APP_ROUTES.ERROR,  component: ErrorPageComponent },
  { path: APP_ROUTES.OFFLINE,  component: OfflinePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
