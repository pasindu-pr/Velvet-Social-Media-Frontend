import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { ToastrService } from 'ngx-toastr';
import { ApplicationState } from 'src/app/redux/reducers';
import { environment } from 'src/environments/environment';
import * as FriendsActions from '../../../redux/actions/friends.action';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<ApplicationState>,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {}

  @Input() profilePic: string;
  @Input() name: string;
  @Input() location: string;
  @Input() createdAt: string;
  @Input() id: number;
  @Input() type: string;

  getFriendFromDate() {
    dayjs.extend(relativeTime);
    return dayjs(this.createdAt).fromNow();
  }

  onUnfriendClick() {
    this.http
      .delete(`${environment.backendUrl}/socialmedia/friends/${this.id}/`, {
        observe: 'response',
      })
      .subscribe((response) => {
        if (response.status == 204) {
          this.toastService.info(
            'Friend unfriend',
            `You unfriended ${this.name} successfully!`,
            {
              progressBar: true,
              positionClass: 'toast-bottom-right',
              closeButton: true,
              timeOut: 5000,
            }
          );
          this.store.dispatch(FriendsActions.FETCH_USERS_FRIENDS_REQUEST());
        }
      });
  }
}
