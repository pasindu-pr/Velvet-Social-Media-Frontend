import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() profilePic: string;
  @Input() name: string;
  @Input() location: string;
  @Input() createdAt: string;

  getFriendFromDate() {
    dayjs.extend(relativeTime);
    return dayjs(this.createdAt).fromNow();
  }
}
