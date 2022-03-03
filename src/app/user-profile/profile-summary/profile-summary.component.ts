import { Component, Input, OnInit } from '@angular/core';
import { faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { IUser } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  currentUser: IUser;

  ngOnInit(): void {
    this.store.select('currentUserState').subscribe((data) => {
      this.currentUser = data.user;
    });
  }

  CURRENT_USER = 'current user constant';

  userType() {
    if (this.currentUser.id == this.currentUserId) {
      return this.CURRENT_USER;
    }
    return;
  }

  @Input() name: string;
  @Input() profilePic: string;
  @Input() description: string;
  @Input() website: string;
  @Input() photos: number;
  @Input() friends: number;
  @Input() postCount: number;
  @Input() currentUserId: number;

  linkIcon: IconDefinition = faLink;
}
