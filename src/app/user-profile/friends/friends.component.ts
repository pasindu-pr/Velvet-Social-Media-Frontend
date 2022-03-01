import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { Ifriend } from 'src/app/shared/Models/Friend';
import * as FriendsActions from '../../redux/actions/friends.action';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  friends: Ifriend[];

  ngOnInit(): void {
    this.store.select('currentUserFriendsState').subscribe((data) => {
      this.friends = data.friends;
    });
    this.store.dispatch(FriendsActions.FETCH_USERS_FRIENDS_REQUEST());
  }
}
