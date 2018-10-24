import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { GameService } from 'src/app/services/game.service';
import { APP_ROUTES } from 'src/app/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss'],
})
export class AppRootComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private gameService: GameService,
              private router: Router) {}

  get user() {
    return this.userService.userInfo;
  }

  get score() {
    return this.gameService.score;
  }

  restart() {
    this.gameService.reset();
    this.userService.reset();
    this.router.navigate([`/${APP_ROUTES.INITIAL}`]);
  }

}
