import { TestBed } from '@angular/core/testing';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: 'WINDOW', useValue: {  }}]
  }));

  it('should be created', () => {
    const service: LoggingService = TestBed.get(LoggingService);
    expect(service).toBeTruthy();
  });
});
