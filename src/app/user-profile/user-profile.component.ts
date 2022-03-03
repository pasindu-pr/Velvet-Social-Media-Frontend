import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICurrentUser } from '../shared/Models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  currentUser: ICurrentUser;

  ngOnInit(): void {
    this.http
      .get<ICurrentUser>(
        `${environment.backendUrl}/socialmedia/current-profile/`
      )
      .subscribe((data) => {
        this.currentUser = data;
      });
  }

  getFullName() {
    return `${this.currentUser.first_name} ${this.currentUser.last_name}`;
  }
}
