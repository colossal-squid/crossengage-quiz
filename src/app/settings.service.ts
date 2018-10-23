import { Injectable } from '@angular/core';

export const APP_ROUTES = {
  INITIAL: 'initial',
  QUIZ: 'quiz',
  SUMMARY: 'summary',
  ERROR: 'error',
  OFFLINE: 'offline'
};

export interface DifficultySetting {
  id:number,
  key: string,
  answers:number
}

/**
 * Can be externalized into a JSON file, loaded on init through separate provider
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public readonly DIFFICULTY_SETTINGS:DifficultySetting[] = [
    { id: 1, key: 'difficulty.levels.easy', answers: 3 },
    { id: 2, key: 'difficulty.levels.medium', answers: 4 },
    { id: 3, key: 'difficulty.levels.hard', answers: 5 }
  ];

  constructor() { }
}
