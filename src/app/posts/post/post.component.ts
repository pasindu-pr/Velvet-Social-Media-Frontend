import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { IPhoto } from 'src/app/shared/Models/Post';
import { IUser } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  currentUser: IUser;

  ngOnInit(): void {
    this.store.select('currentUserState').subscribe((data) => {
      this.currentUser = data.user;
    });

    this.isCurrentUserLiked();
  }

  @Input() postContent: string;
  @Input() postImage: IPhoto[];
  @Input() location: string;
  @Input() likesCount: number;
  @Input() commentsCount: number;
  @Input() sharesCount: number;
  @Input() createdAt: string;

  @Input() username: string;
  @Input() userProfilePic: string;

  // Shared Post Items
  @Input() isShared: boolean;
  @Input() sharedUserUsername: string;
  @Input() sharedUserProfilePic: string;
  @Input() sharedTime: string;
  @Input() sharedText: string;
  @Input() likes: [];

  isCurrentUserLiked() {
    return this.likes.some(
      (like: {
        id: number;
        user: {
          id: number;
          profile_picture: string;
          full_name: string;
        };
      }) => like.user.id == this.currentUser.id
    );
  }

  getImageLink() {
    return this.postImage[0] ? this.postImage[0].image_link : '';
  }
}
