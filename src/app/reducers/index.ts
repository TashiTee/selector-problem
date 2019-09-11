import { postReducer } from '../reducers/post.reducer';

import { PostState } from '../states/post.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState { post: PostState };

export const reducers: ActionReducerMap<AppState> = {
    post: postReducer
};