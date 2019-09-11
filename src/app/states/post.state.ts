import { Post } from '../models/post.model'
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface AppState {
    readonly post: Post[];
}

// defines structure
export interface PostState extends EntityState<Post> { }



export const PostAdapter = createEntityAdapter<Post>({
    selectId: (post: Post) => post.id
});

export const PostInitialState: PostState = PostAdapter.getInitialState({
    // id: 1,
    // title: 'Post 1',
    // body: 'Post Body 1'
});


