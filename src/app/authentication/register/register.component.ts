import { Component, OnInit } from '@angular/core';
import {
  IconDefinition,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { ILocation } from 'src/app/shared/Models/Location';
import * as LocationActios from '../../redux/actions/location.actions';

interface Event {
  term: string;
  items: any[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.store.select('locationState').subscribe((data) => {
      this.locations = data.locationData;
      this.isSelectLoading = data.loading;
    });
  }

  emailIcon: IconDefinition = faEnvelope;
  passwordIcon: IconDefinition = faKey;

  selectedLocation: string;
  isSelectLoading: boolean;

  locations: ILocation[] = [];

  onSearch(e: Event) {
    this.store.dispatch(
      LocationActios.FETCH_LOCATIONS_REQUEST({ query: e.term })
    );
  }
}
