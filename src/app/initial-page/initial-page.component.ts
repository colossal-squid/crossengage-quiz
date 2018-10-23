import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { L10nService } from 'src/app/services/l10n.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  public userName:string;
  public levels:any[] = [];

  static readonly USERNAMES:string[] = [
    'Tony Hawk', 'Bob Burnquist', 'Kareem Campbell', 'Elissa Steamer', 'Jamie Thomas', 'Spider-Man'
  ];
  constructor(private settings:SettingsService,
              private l10n:L10nService) { }

  ngOnInit() {
    this.userName = this.getInitialRandomName();
    this.levels = this.settings.DIFFICULTY_SETTINGS;
  }

  private getInitialRandomName() {
    const randomName = InitialPageComponent.USERNAMES[ Math.floor(InitialPageComponent.USERNAMES.length * Math.random())];
    return `${randomName}_${Math.floor(Math.random()*99)}`;
  }

}
