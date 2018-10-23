import { Injectable } from '@angular/core';

interface UserModel {
  name: string,
  level: number,
  score: number
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:UserModel = <UserModel>{}; 
  
  constructor() { }

  setUserInfo(username:string, level:number) {
    this.user = {
      name: username,
      level: level,
      score: 0
    };
  }

  addScore(score:number) {
    if (score > 0) {

    }
    this.user.score += score;
  }

  get userInfo():UserModel {
    return {... this.user};
  }

}
