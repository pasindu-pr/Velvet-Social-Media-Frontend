import { createAction, props, union } from '@ngrx/store';
import { IPost, IPostComment, IPostLike } from 'src/app/shared/Models/Post';

export const FETCH_POST_MODEL_DETAILS_REQUEST = createAction(
  '[PostModel] Fetch Post Model Details Request',
  props<{ postid: number }>()
);

export const FETCH_POST_MODEL_SUCCESS = createAction(
  '[PostModel] Fetch Post Model Details Success',
  props<{
    post: IPost;
    likes: IPostLike[];
    comments: IPostComment[];
    numOfShares: number;
  }>()
);

export const FETCH_POST_MODEL_ERROR = createAction(
  '[PostModel] Fetch Post Model Details Error',
  props<{ error: string }>()
);

export const POST_MODEL_RESET = createAction(
  '[PostModel] Reset Post Model Details'
);

const actions = union({
  FETCH_POST_MODEL_DETAILS_REQUEST,
  FETCH_POST_MODEL_SUCCESS,
  FETCH_POST_MODEL_ERROR,
  POST_MODEL_RESET,
});

export type POSTMODELACTIONS = typeof actions;
