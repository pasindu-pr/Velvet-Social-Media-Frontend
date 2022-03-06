import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICurrentUser } from '../shared/Models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() currentUser: ICurrentUser;

  ngOnInit(): void {}

  getFullName() {
    return `${this.currentUser.first_name} ${this.currentUser.last_name}`;
  }
}
