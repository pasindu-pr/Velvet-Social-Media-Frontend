import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { Ifriend } from 'src/app/shared/Models/Friend';
import * as FriendsActions from '../../redux/actions/friends.action';
import * as FriendsRequestsActions from '../../redux/actions/friendRequests.actions';
import { IfriendRequest } from 'src/app/shared/Models/IFriendRequest';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  friends: Ifriend[];
  friendRequests: IfriendRequest[];

  ngOnInit(): void {
    this.store.select('currentUserFriendsState').subscribe((data) => {
      this.friends = data.friends;
    });
    this.store.select('friendsRequestsState').subscribe((data) => {
      this.friendRequests = data.requests;
    });
    this.store.dispatch(FriendsActions.FETCH_USERS_FRIENDS_REQUEST());
    this.store.dispatch(
      FriendsRequestsActions.FETCH_USERS_FRIENDS_REQUESTS_REQUEST()
    );
  }
}
