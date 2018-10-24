import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [{
      provide: 'WINDOW', useValue: { sessionStorage: {
        getItem: jasmine.createSpy(),
        setItem: jasmine.createSpy()
    } }}]
  }));

  it('should be created', () => {
    const service: QuestionsService = TestBed.get(QuestionsService);
    expect(service).toBeTruthy();
  });
});
