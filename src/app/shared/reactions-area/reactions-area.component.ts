import { Component, Input, OnInit } from '@angular/core';
import {
  faComment,
  faHeart,
  faShare,
  faTimes,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as TimelineActions from '../../redux/actions/timeline.actions';
import * as PostModelActions from '../../redux/actions/postModel.actions';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/redux/reducers';
import { IPost } from '../Models/Post';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactions-area',
  templateUrl: './reactions-area.component.html',
  styleUrls: ['./reactions-area.component.scss'],
})
export class ReactionsAreaComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<ApplicationState>,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.store.select('postModelState').subscribe((data) => {
      this.isPostModelOpen = data.isModelOpen;
      this.openPostModelPost = data.post;
    });
  }

  isPostModelOpen: boolean;
  isPostShareModelOpen: boolean = false;

  openPostModelPost: IPost;
  heartIcon: IconDefinition = faHeart;
  regularHeartIcon: IconDefinition = faRegularHeart;
  commentsIcon: IconDefinition = faComment;
  shareIcon: IconDefinition = faShare;
  closeIcon: IconDefinition = faTimes;

  @Input() reactionsCenter: boolean = false;

  @Input() hasLiked: boolean;

  @Input() likesCount: number;
  @Input() commentsCount: number;
  @Input() sharesCount: number;
  @Input() postID: number;

  sharePostForm = new FormGroup({
    sharedContent: new FormControl('Click here to type something!'),
  });

  likePost() {
    this.http
      .post(
        `${environment.backendUrl}/socialmedia/posts/${this.postID}/likes/`,
        {},
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.status == 201 || response.status == 204) {
          this.store.dispatch(TimelineActions.FETCH_TIMELINE_REQUEST());

          if (this.isPostModelOpen) {
            this.store.dispatch(
              PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST({
                postid: this.openPostModelPost.id,
              })
            );
          }
        }
      });
  }

  sharePost() {
    this.isPostShareModelOpen = true;
  }

  onCloseModel() {
    this.isPostShareModelOpen = false;
  }

  onSharePost() {
    this.http
      .post(
        `${environment.backendUrl}/socialmedia/posts/${this.postID}/shares/`,
        {
          shared_content: this.sharePostForm.value['sharedContent'],
        },
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.status == 201) {
          this.toastService.info(
            'Post Shared',
            'You shared this post successfully!',
            {
              progressBar: true,
              positionClass: 'toast-bottom-right',
              closeButton: true,
              timeOut: 5000,
            }
          );

          this.store.dispatch(
            PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST({
              postid: this.openPostModelPost.id,
            })
          );
        }
      });
  }
}
