import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  faArrowRight,
  faTimes,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { IPost, IPostComment, IPostLike } from 'src/app/shared/Models/Post';
import { IUser } from 'src/app/shared/Models/user';
import { environment } from 'src/environments/environment';
import * as PostModelActions from '../../redux/actions/postModel.actions';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements OnInit {
  constructor(
    private store: Store<ApplicationState>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.store.select('postModelState').subscribe((data) => {
      this.comments = data.comments;
      this.postLikes = data.likes;
      this.numberOfShares = data.shares;
      this.currentPost = data.post;
    });

    this.store.select('currentUserState').subscribe((data) => {
      this.currentUser = data.user;
    });
  }

  postLikes: IPostLike[];
  comments: IPostComment[];
  numberOfShares: number;
  currentPost: IPost;

  rightArrow: IconDefinition = faArrowRight;
  closeIcon: IconDefinition = faTimes;

  isModelOpen: boolean;

  currentUser: IUser;

  commentForm = new FormGroup({
    comment: new FormControl(),
  });

  onSubmit() {
    console.log('Submit');
  }

  onCloseModel() {
    this.store.dispatch(PostModelActions.POST_MODEL_RESET());
  }

  getImageUrl() {
    return this.currentPost.photos[0]
      ? this.currentPost.photos[0].image_link
      : '';
  }

  getFirstLikeUserName() {
    return this.postLikes[0].user.full_name;
  }

  getLikesCount() {
    return this.postLikes.length;
  }

  onCommentSubmitButtonClicked() {
    this.http
      .post(
        `${environment.backendUrl}/socialmedia/posts/${this.currentPost.id}/comments/`,
        {
          content: this.commentForm.value['comment'],
        },
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.status == 201) {
          this.store.dispatch(
            PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST({
              postid: this.currentPost.id,
            })
          );

          this.commentForm.markAsPristine();
        } else {
          alert('Something went wrong!');
        }
      });
  }

  isCurrentUserLiked() {
    return this.currentPost.likes.some(
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
}
