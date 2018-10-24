import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';

import { AppRootComponent } from './app-root.component';
import { TranslatePipe } from 'src/app/services/l10n.service';
import { RouterTestingModule  } from '@angular/router/testing';

describe('AppRootComponent', () => {
  let component: AppRootComponent;
  let fixture: ComponentFixture<AppRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppRootComponent, TranslatePipe],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule
      ],
      providers: [
        {provide: 'WINDOW', useValue: { sessionStorage: {
          getItem: jasmine.createSpy(),
          setItem: jasmine.createSpy()
        } }}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
