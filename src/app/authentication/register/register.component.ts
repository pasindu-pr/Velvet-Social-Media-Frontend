import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  IconDefinition,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { ILocation } from 'src/app/shared/Models/Location';
import { IUser } from 'src/app/shared/Models/user';
import { environment } from 'src/environments/environment';
import * as LocationActios from '../../redux/actions/location.actions';
import * as SignUpActions from '../../redux/actions/signup.actions';

interface Event {
  term: string;
  items: any[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<ApplicationState>,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {}

  currentUser: IUser;

  @Input() isEditing: boolean = false;

  ngOnInit(): void {
    this.store.select('locationState').subscribe((data) => {
      this.locations = data.locationData;
      this.isSelectLoading = data.loading;
    });

    this.store.select('userRegisterState').subscribe((data) => {
      this.isFormLoading = data.loading;
      this.isFormValid = data.success;
    });

    if (this.isEditing) {
      this.store.select('currentUserState').subscribe((data) => {
        this.currentUser = data.user;

        if (this.isEditing) {
          this.registerForm.patchValue({
            first_name: data.user.first_name,
            last_name: data.user.last_name,
            email: data.user.email,
            birthdate: data.user.birthdate,
            location: data.user.location,
            password: 'default',
            profile_pic: data.user.profile_picture,
          });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(LocationActios.FETCH_LOCATIONS_RESET());
  }

  emailIcon: IconDefinition = faEnvelope;
  passwordIcon: IconDefinition = faKey;

  selectedLocation: string;
  isSelectLoading: boolean;
  isFormLoading: boolean;
  formError: string;
  isFormValid: boolean = true;
  uploadedImage: string;

  locations: ILocation[] = [];

  registerForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    birthdate: new FormControl(),
    password: new FormControl(),
    location: new FormControl(),
    profile_picture: new FormControl(),
  });

  onSearch(e: Event) {
    this.store.dispatch(
      LocationActios.FETCH_LOCATIONS_REQUEST({ query: e.term })
    );
  }

  onUploadImage(event: Event | any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      console.log(file);

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

  onSubmit(e: Event) {
    if (this.registerForm.status == 'INVALID') {
      this.isFormValid = false;
      this.formError = 'Please fill all the fields to continue';
      return;
    }

    const birthdate = this.datePipe.transform(
      this.registerForm.value['birthdate'],
      'yyyy-MM-dd'
    );

    let location = this.registerForm.value['location'];
    location = `${location.city}, ${location.region}, ${location.country}`;

    this.store.dispatch(
      SignUpActions.USER_REGISTER_REQUEST({
        ...this.registerForm.value,
        location,
        birthdate: birthdate,
        profile_picture: this.uploadedImage,
      })
    );
  }
}
