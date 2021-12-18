import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faKey,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }

  emailIcon: IconDefinition = faEnvelope;
  passwordIcon: IconDefinition = faKey;
}
