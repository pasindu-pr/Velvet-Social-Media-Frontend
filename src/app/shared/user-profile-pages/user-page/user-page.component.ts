import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ICurrentUser } from '../../Models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  userProfile: ICurrentUser;

  userId: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];

      this.http
        .get<ICurrentUser>(
          `${environment.backendUrl}/socialmedia/users/${this.userId}/`
        )
        .subscribe((data) => {
          this.userProfile = data;
        });
    });
  }
}
