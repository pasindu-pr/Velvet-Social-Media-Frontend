import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApplicationState } from './redux/reducers';
import { LocationState } from './redux/reducers/locations.reducers';
import { HttpClient } from '@angular/common/http';

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
    // this.http
    //   .get(`${environment.backendUrl}/auth/users/me/`)
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    this.store.select('postModelState').subscribe((data) => {
      this.isModelOpen = data.isModelOpen;
    });
  }

  isModelOpen: boolean;
}
