import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: 'WINDOW', useValue: { sessionStorage: {
        getItem: jasmine.createSpy(),
        setItem: jasmine.createSpy()
    } }}]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
