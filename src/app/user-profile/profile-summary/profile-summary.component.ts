import { Component, OnInit } from '@angular/core';
import { faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  linkIcon: IconDefinition = faLink;
}
