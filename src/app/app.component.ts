import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { props, Store } from '@ngrx/store';
import { ApplicationState } from './redux/reducers';
import { LocationState } from './redux/reducers/locations.reducers';
import { ILocation } from './shared/Models/Location';
import * as LocationActions from './redux/actions/location.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'social-media-site-frontend';

  constructor(
    private router: Router,
    private store: Store<ApplicationState>,
    private http: HttpClient
  ) {}

  locations: LocationState;

  ngOnInit() {
    this.http
      .get(`${environment.backendUrl}/auth/users/me/`)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
