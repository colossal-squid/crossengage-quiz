import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { L10nService } from 'src/app/services/l10n.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/settings.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  constructor(private settings: SettingsService,
              private l10n: L10nService,
              private userService: UserService,
              private gameService: GameService,
              private router: Router) {}

  static readonly USERNAMES: string[] = [
    'Tony Hawk', 'Bob Burnquist', 'Kareem Campbell', 'Elissa Steamer', 'Jamie Thomas', 'Spider-Man'
  ];

  public userName: string;
  public levels: any[] = [];
  public selectedLevel: number;

  ngOnInit() {
    this.userName = this.getInitialRandomName();
    this.levels = this.settings.DIFFICULTY_SETTINGS;
    this.selectedLevel = this.levels[0].id;
  }

  private getInitialRandomName() {
    const randomName = InitialPageComponent.USERNAMES[ Math.floor(InitialPageComponent.USERNAMES.length * Math.random())];
    return `${randomName}_${Math.floor(Math.random() * 99)}`;
  }

  public saveUserSettings() {
    this.userService.setUserInfo(this.userName, this.selectedLevel);
    this.gameService.start(this.userService.userInfo);
    this.router.navigate([`/${APP_ROUTES.QUIZ}`]);
  }
}
