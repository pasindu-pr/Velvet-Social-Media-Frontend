import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { props, Store } from '@ngrx/store';
import { ApplicationState } from './redux/reducers';
import { LocationState } from './redux/reducers/locations.reducers';
import { ILocation } from './shared/Models/Location';
import * as LocationActions from './redux/actions/location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'social-media-site-frontend';

  constructor(private router: Router, private store: Store<ApplicationState>) {}

  locations: LocationState;

  ngOnInit() {
    this.store.dispatch(
      LocationActions.FETCH_LOCATIONS_REQUEST({ query: 'London' })
    );

    this.store.select('locationState').subscribe((data) => {
      this.locations = data;

      console.log(this.locations);
    });
  }
}
