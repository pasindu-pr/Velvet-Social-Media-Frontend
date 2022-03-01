import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
import * as PostModelActions from '../../redux/actions/postModel.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  uploadedImage: string;
  postContent: string = "What's on your mind?";

  locationSearchForm = new FormGroup({
    locationQuery: new FormControl(),
  });

  locations: ILocation[] = [];

  constructor(
    private store: Store<ApplicationState>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.store.select('locationState').subscribe((data) => {
      this.locations = data.locationData;
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(LocationActions.FETCH_LOCATIONS_RESET());
    this.locations = [];
    this.locationSearchForm.reset();
    this.postContent = "What's on your mind?";
    this.selectedLocation = null as any;
    this.isLocationSelectOpen = false;
    this.uploadedImage = null as any;
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

  imageUploadForm = new FormGroup({
    image: new FormControl(),
  });

  onUploadImage(event: Event | any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      //  upload image to backend
      let formData: FormData = new FormData();
      formData.set('photos', file);

      this.http
        .post<{ image: string }>(
          `${environment.backendUrl}/socialmedia/image_upload/`,
          formData
        )
        .subscribe((res) => {
          this.uploadedImage = res.image;
        });
    }
  }

  onCreatePost() {
    const post = {
      content: this.postContent,
      location: this.selectedLocation,
      image: this.uploadedImage,
    };

    this.http
      .post<{ post: { message: string; postid: number } }>(
        `${environment.backendUrl}/socialmedia/posts/`,
        post
      )
      .subscribe((res) => {
        this.store.dispatch(
          PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST({
            postid: res.post.postid,
          })
        );

        this.isModelOpen = false;
        this.ngOnDestroy();
      });
  }
}
