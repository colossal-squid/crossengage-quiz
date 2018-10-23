import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRootComponent } from './app-root/app-root.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TranslatePipe } from 'src/app/services/l10n.service';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OfflinePageComponent } from './offline-page/offline-page.component';

const MATERIAL_MODULES = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];
@NgModule({
  declarations: [
    AppRootComponent,
    InitialPageComponent,
    QuizPageComponent,
    SummaryPageComponent,
    TranslatePipe,
    ErrorPageComponent,
    OfflinePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    { provide: 'WINDOW', useFactory: getWindow }
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }

function getWindow() {
  // isPlatformBrowser may make sense here. I only use this to wrap logging 
  return window;
}