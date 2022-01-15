import { createReducer, on } from '@ngrx/store';
import { IPost } from 'src/app/shared/Models/Post';
import * as TimelinePostsActions from '../actions/timeline.actions';

export interface TimelineState {
  posts: IPost[];
  loading: boolean;
  success: boolean;
  error: string;
}

export const timelineInitialState: TimelineState = {
  posts: [],
  loading: false,
  success: undefined as any,
  error: undefined as any,
};

export const TimelinePostsReducer = createReducer(
  timelineInitialState,

  on(TimelinePostsActions.FETCH_TIMELINE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(TimelinePostsActions.FETCH_TIMELINE_SUCCESS, (state, { posts }) => ({
    ...state,
    posts: posts,
    loading: false,
    success: true,
  })),

  on(TimelinePostsActions.FETCH_TIMELINE_ERROR, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    success: false,
  }))
);
