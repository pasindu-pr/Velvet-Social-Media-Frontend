import { Component, Input, OnInit } from '@angular/core';
import {
  faMapMarkerAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  locationIcon: IconDefinition = faMapMarkerAlt;

  @Input() profilePic: string;
  @Input() username: string;
  @Input() location: string;
  @Input() createdAt: string;

  getCreatedDate() {
    dayjs.extend(relativeTime);
    return dayjs(this.createdAt).fromNow();
  }
}
