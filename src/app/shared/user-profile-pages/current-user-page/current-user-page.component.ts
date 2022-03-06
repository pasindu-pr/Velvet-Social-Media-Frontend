import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICurrentUser } from '../../Models/user';

@Component({
  selector: 'app-current-user-page',
  templateUrl: './current-user-page.component.html',
})
export class CurrentUserPageComponent implements OnInit {
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
}
