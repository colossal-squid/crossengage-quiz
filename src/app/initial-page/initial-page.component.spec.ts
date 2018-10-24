import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { InitialPageComponent } from './initial-page.component';
import { TranslatePipe } from 'src/app/services/l10n.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InitialPageComponent', () => {
  let component: InitialPageComponent;
  let fixture: ComponentFixture<InitialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPageComponent, TranslatePipe ],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: 'WINDOW', useValue: { sessionStorage: {
          getItem: jasmine.createSpy(),
          setItem: jasmine.createSpy()
        } }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
