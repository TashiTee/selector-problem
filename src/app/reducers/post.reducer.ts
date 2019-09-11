import { Action } from '@ngrx/store'
import { Post } from './../models/post.model'
import * as PostActions from './../actions/post.actions'
import { PostState, PostAdapter, PostInitialState } from '../states/post.state'


export function postReducer(state: PostState = PostInitialState, action: PostActions.Actions) {
    switch (action.type) {
        case PostActions.ADD_POST:
            return { ...state };
        case PostActions.REMOVE_POST:
            //state.splice(action.payload, 1);
            return state;
        case PostActions.GET_POSTS_SUCCESS:
            return PostAdapter.addMany(action.payload, { ...state });
        case PostActions.ADD_POST_SUCCESS:
            return PostAdapter.addOne(action.payload, { ...state });
        default:
            return state;
    }
}