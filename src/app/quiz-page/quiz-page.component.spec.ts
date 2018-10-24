import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPageComponent } from './quiz-page.component';
import { MatProgressSpinnerModule, MatCardModule, MatRadioModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('QuizPageComponent', () => {
  let component: QuizPageComponent;
  let fixture: ComponentFixture<QuizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageComponent ],
      imports: [
        FormsModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{
        provide: 'WINDOW', useValue: { sessionStorage: {
          getItem: jasmine.createSpy(),
          setItem: jasmine.createSpy()
      } }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
