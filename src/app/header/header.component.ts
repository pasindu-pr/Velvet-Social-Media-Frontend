import { Component, OnInit } from '@angular/core';
import {
  faQuestionCircle,
  faEnvelope,
  faBell,
  faSearch,
  faHome,
  faNewspaper,
  faPeopleArrows,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../redux/reducers';
import * as CurrentUserActions from '../redux/actions/currentUser.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<ApplicationState>, private router: Router) {}

  questionCircleIcon = faQuestionCircle;
  envelopeIcon = faEnvelope;
  bellIcon = faBell;
  searchIcon = faSearch;
  homeIcon = faHome;
  newsIcon = faNewspaper;
  peopleIcon = faPeopleArrows;

  ngOnInit(): void {
    this.store.dispatch(CurrentUserActions.FETCH_CURRENT_USER_REQUEST());
  }

  onFriendsClick() {
    this.router.navigate(['/myaccount/friends']);
  }

  onHomeClick() {
    this.router.navigate(['/']);
  }
}
