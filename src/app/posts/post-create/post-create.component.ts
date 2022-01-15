import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  faMicrophone,
  faImages,
  faTimesCircle,
  faLocationArrow,
  IconDefinition,
  faSearchLocation,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ILocation } from 'src/app/shared/Models/Location';

import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import * as LocationActions from '../../redux/actions/location.actions';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit, OnDestroy {
  imagesIcon: IconDefinition = faImages;
  microphoneIcon: IconDefinition = faMicrophone;
  closeIcon: IconDefinition = faTimesCircle;
  locationIcon: IconDefinition = faLocationArrow;
  locationSearchIcon: IconDefinition = faSearchLocation;
  backArrowIcon: IconDefinition = faArrowLeft;

  isModelOpen: boolean = false;
  isLocationSelectOpen: boolean = false;
  selectedLocation: string;

  locationSearchForm = new FormGroup({
    locationQuery: new FormControl(),
  });

  locations: ILocation[] = [];

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.store.select('locationState').subscribe((data) => {
      this.locations = data.locationData;
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(LocationActions.FETCH_LOCATIONS_RESET());
  }

  handleLocationChange(e: Event) {
    this.store.dispatch(
      LocationActions.FETCH_LOCATIONS_REQUEST({
        query: this.locationSearchForm.value['locationQuery'],
      })
    );
  }

  handleLocationSelect(i: number) {
    const location = `${this.locations[i].city}, ${this.locations[i].region}, ${this.locations[i].country}`;
    this.selectedLocation = location;
    this.isLocationSelectOpen = false;
  }

  onInputClick() {
    this.isModelOpen = true;
  }

  onInputClose() {
    this.isModelOpen = false;
  }

  onLocationClick() {
    this.isLocationSelectOpen = !this.isLocationSelectOpen;
  }
}
