import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../redux/reducers';
import * as PeopleActions from '../redux/actions/poeple.actions';
import { IPerson } from '../shared/Models/IPerson';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: [
    './people.component.scss',
    '../user-profile/friends/friends.component.scss',
  ],
})
export class PeopleComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  people: IPerson[];

  ngOnInit(): void {
    this.store.select('peopleState').subscribe((data) => {
      this.people = data.people;
    });

    this.store.dispatch(PeopleActions.FETCH_PEOPLE_REQUEST());
  }
}
