import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TimelineActions from '../redux/actions/timeline.actions';
import * as CurrentUserActions from '../redux/actions/currentUser.actions';
import { ApplicationState } from '../redux/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<ApplicationState>, private router: Router) {}

  posts: Array<any> = [];
  loading: boolean;

  ngOnInit(): void {
    this.store.dispatch(TimelineActions.FETCH_TIMELINE_REQUEST());

    this.store.select('timelinePostsState').subscribe((data) => {
      this.posts = data.posts;
      this.loading = data.loading;
    });

    this.store.select('currentUserState').subscribe((data) => {
      if (data.user === undefined) {
        this.router.navigate(['/auth/login']);
      }
    });

    this.store.dispatch(CurrentUserActions.FETCH_CURRENT_USER_REQUEST());
  }

  postContent: string = 'This is the contnet';
}
