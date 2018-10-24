import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { SummaryPageComponent } from './summary-page.component';
import { TranslatePipe } from 'src/app/services/l10n.service';
import { MatListModule } from '@angular/material';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPageComponent, TranslatePipe ],
      imports: [
        MatListModule,
        HttpClientTestingModule
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
    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
