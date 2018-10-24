import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePageComponent } from './offline-page.component';
import { MatIconModule } from '@angular/material';
import { TranslatePipe } from 'src/app/services/l10n.service';

describe('OfflinePageComponent', () => {
  let component: OfflinePageComponent;
  let fixture: ComponentFixture<OfflinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePageComponent, TranslatePipe ],
      imports: [
        MatIconModule
      ],
      providers: [ {provide: 'WINDOW', useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
