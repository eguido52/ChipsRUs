import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private http: HttpClient) { }

  getUser(userId) {
    return this.http.get('https://usersvc.herokuapp.com/user/' + userId);
  }

  getUserByName(userName) {
    // return username and credits if login succesful
    return this.http.get('https://usersvc.herokuapp.com/users/' + userName);
  }

  isUser(userName) {
    if ((this.http.get('https://usersvc.herokuapp.com/users/' + userName)) == null) {
      return false;
    } else {
      return true;
    }
  }

}
