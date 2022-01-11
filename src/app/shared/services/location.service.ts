import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  private API_USERNAME = 'encidev';

  subject = new Subject<Boolean>();

  LOCATION_API_URL = `http://api.geonames.org/
  searchJSON?q=Los Angeles&maxRows=10&username=${this.API_USERNAME}`;

  fetchLocations = () => {};
}
