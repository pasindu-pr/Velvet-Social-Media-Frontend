import { Component, OnInit } from '@angular/core';
import {
  IconDefinition,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  emailIcon: IconDefinition = faEnvelope;
  passwordIcon: IconDefinition = faKey;
}
