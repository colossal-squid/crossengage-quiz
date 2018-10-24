import { Injectable, Inject } from '@angular/core';

export interface UserModel {
  name: string;
  level: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject('WINDOW') window: Window) {
      const lastUser = window.sessionStorage.getItem(UserService.sessionStorageKey);
      if (!!lastUser) {
        this.user = JSON.parse(lastUser);
      }
      this.windowRef = window;
    }

  get userInfo(): UserModel {
    return {... this.user};
  }
  private static readonly sessionStorageKey = 'rg_quiz_user';
  private windowRef: Window;
  private user: UserModel = <UserModel>{};

  reset() {
    this.user = null;
  }

  setUserInfo(username: string, level: number) {
    this.user = {
      name: username,
      level: level
    };
    this.windowRef.sessionStorage.setItem(UserService.sessionStorageKey, JSON.stringify(this.user));
  }

}
