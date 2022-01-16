import { createReducer, on } from '@ngrx/store';
import { IPost, IPostComment, IPostLike } from 'src/app/shared/Models/Post';
import * as PostModelActions from '../actions/postModel.actions';

export interface PostModelState {
  likes: IPostLike[];
  comments: IPostComment[];
  shares: number;
  loading: boolean;
  error: string;
  success: boolean;
  isModelOpen: boolean;
  post: IPost;
}

export const PostModelInitialState: PostModelState = {
  likes: [],
  comments: [],
  shares: 0,
  loading: false,
  success: false,
  error: undefined as any,
  isModelOpen: false,
  post: undefined as any,
};

export const postModelReducer = createReducer(
  PostModelInitialState,

  on(PostModelActions.FETCH_POST_MODEL_DETAILS_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    PostModelActions.FETCH_POST_MODEL_SUCCESS,
    (state, { likes, comments, numOfShares, post }) => ({
      ...state,
      likes,
      comments,
      shares: numOfShares,
      success: true,
      loading: false,
      isModelOpen: true,
      post,
    })
  ),

  on(PostModelActions.FETCH_POST_MODEL_ERROR, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    success: false,
  })),

  on(PostModelActions.POST_MODEL_RESET, (state) => ({
    ...PostModelInitialState,
  }))
);
