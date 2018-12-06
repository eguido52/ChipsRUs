
import { UsersService } from './../users.service';
import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currUser$: any;
  user$: Object;
  isUser$: boolean;
  isVis$: boolean;

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router,
    private user: UsersService ) {
      this.isUser$ = false;
      this.isVis$ = true;
      this.storage.set('currUser', '');
     }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.user.getUserByName(username).subscribe(
      user => this.user$ = user
    );

    if (this.user$ == null || this.user$[0] == null) {
      this.isVis$ = false;
    } else {
      this.isUser$ = true;
      this.isVis$ = true;
    }

    if (this.isUser$) {
      this.storage.set('currUser', this.user$[0]);
      location.reload();
      this.router.navigate(['/products']);
    } else {
      this.isVisible();
      console.log('Incorrect Login Information');
    }
  }
  isVisible() {
    return this.isVis$;
  }
}
