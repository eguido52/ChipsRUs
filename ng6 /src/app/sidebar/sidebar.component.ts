import { UsersService } from './../users.service';
import { Component, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {

  userName$: {id: String,
              userName: String,
              credit: any};

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private user: UsersService ) {
      if (this.storage.get('currUser') == null) {
        this.userName$ = {'id': '', 'userName': '', 'credit': ''};
      } else {
        console.log('UserName is ', this.storage.get('currUser'));
        this.userName$ = this.storage.get('currUser');
      }
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.userName$ = this.user.getCurrUser();
  }

  ngOnInit() {
  }

}
