import { Component, OnInit } from '@angular/core';
import {
  faMicrophone,
  faImages,
  faTimesCircle,
  faLocationArrow,
  IconDefinition,
  faSearchLocation,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}

  imagesIcon: IconDefinition = faImages;
  microphoneIcon: IconDefinition = faMicrophone;
  closeIcon: IconDefinition = faTimesCircle;
  locationIcon: IconDefinition = faLocationArrow;
  locationSearchIcon: IconDefinition = faSearchLocation;
  backArrowIcon: IconDefinition = faArrowLeft;

  isModelOpen: boolean = false;
  isLocationSelectOpen: boolean = false;

  onInputClick() {
    this.isModelOpen = true;
  }

  onInputClose() {
    this.isModelOpen = false;
  }

  onLocationClick() {
    this.isLocationSelectOpen = !this.isLocationSelectOpen;
  }

  ngOnInit(): void {}
}
