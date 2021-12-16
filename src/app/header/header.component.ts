import { Component, OnInit } from '@angular/core';
import {
  faQuestionCircle,
  faEnvelope,
  faBell,
  faSearch,
  faHome,
  faNewspaper,
  faPeopleArrows,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  questionCircleIcon = faQuestionCircle;
  envelopeIcon = faEnvelope;
  bellIcon = faBell;
  searchIcon = faSearch;
  homeIcon = faHome;
  newsIcon = faNewspaper;
  peopleIcon = faPeopleArrows;

  ngOnInit(): void {}
}
