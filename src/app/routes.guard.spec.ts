import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoutesGuard } from './routes.guard';

describe('RoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RoutesGuard, {
        provide: 'WINDOW', useValue: { sessionStorage: {
          getItem: jasmine.createSpy(),
          setItem: jasmine.createSpy()
      } }}]
    });
  });

  it('should ...', inject([RoutesGuard], (guard: RoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
