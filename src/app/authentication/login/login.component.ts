import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faKey,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import * as LoginActions from '../../redux/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private store: Store<ApplicationState>) {}

  ngOnInit() {
    this.store.select('loginState').subscribe((data) => {
      if (data.success == false && data.error) {
        this.isFormValid = false;
        this.formError = data.error;
      }

      this.isLoading = data.loading;
    });
  }

  emailIcon: IconDefinition = faEnvelope;
  passwordIcon: IconDefinition = faKey;

  isFormValid: boolean = true;
  formError: string = ' ';
  isLoading = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.loginForm.controls['email'].errors) {
      this.formError = 'Please enter a valid email';
      this.isFormValid = false;
      return;
    } else if (this.loginForm.controls['password'].errors) {
      this.formError = 'Please enter a valid password';
      this.isFormValid = false;
      return;
    }

    this.store.dispatch(LoginActions.USER_LOGIN_REQUEST(this.loginForm.value));
  }
}
