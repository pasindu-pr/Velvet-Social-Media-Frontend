import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TimelineActions from '../redux/actions/timeline.actions';
import { ApplicationState } from '../redux/reducers';
import { IPost, IsharedPost } from '../shared/Models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}

  posts: Array<any> = [];
  loading: boolean;

  ngOnInit(): void {
    this.store.select('timelinePostsState').subscribe((data) => {
      this.posts = data.posts;
      this.loading = data.loading;
      console.log(this.posts);
    });

    this.store.dispatch(TimelineActions.FETCH_TIMELINE_REQUEST());
  }

  postContent: string = 'This is the contnet';
}
