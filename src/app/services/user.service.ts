import { Injectable, Inject } from '@angular/core';

export interface UserModel {
  name: string,
  level: number,
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private windowRef:Window;
  private user:UserModel = <UserModel>{}; 
  private static readonly sessionStorageKey = 'rg_quiz_user';

  constructor(@Inject('WINDOW') window:Window) {
      let lastUser = window.sessionStorage.getItem(UserService.sessionStorageKey);
      if (!!lastUser) {
        this.user = JSON.parse(lastUser);
      }
      this.windowRef = window;
    }

  reset() {
    this.user = null;
  }

  setUserInfo(username:string, level:number) {
    this.user = {
      name: username,
      level: level
    };
    this.windowRef.sessionStorage.setItem(UserService.sessionStorageKey, JSON.stringify(this.user));
  }

  get userInfo():UserModel {
    return {... this.user};
  }

}
