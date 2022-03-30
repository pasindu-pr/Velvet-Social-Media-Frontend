import { DatePipe } from '@angular/common';
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
    private datePipe: DatePipe
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
          });
        }
      });
    }

    console.log(this.currentUser.first_name);
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

  locations: ILocation[] = [];

  registerForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    birthdate: new FormControl(),
    password: new FormControl(),
    location: new FormControl(),
  });

  onSearch(e: Event) {
    this.store.dispatch(
      LocationActios.FETCH_LOCATIONS_REQUEST({ query: e.term })
    );
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
      })
    );
  }
}
