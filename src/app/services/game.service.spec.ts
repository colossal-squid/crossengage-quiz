import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { GameService } from './game.service';

describe('GameService', () => {
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
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
