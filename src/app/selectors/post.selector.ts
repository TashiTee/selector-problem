import { PostAdapter, PostState } from '../states/post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../models/post.model';

// the name inside quotes needs to match the state defined in app.module.ts
// in the store module section
const selectPosts = createFeatureSelector<PostState>(
    'post'
);

const { selectEntities, selectAll } = PostAdapter.getSelectors(
    selectPosts
);

export const selectPostsAll = selectAll;
export const selectPostEntities = selectEntities;

// export const selectPost = (id) => createSelector(selectPostEntities,
//     selectPosts => selectPosts[id]);


    export const selectPost = (id: number) => {
      createSelector(
        selectAll,
        (data: Post[]) => {
          if (data.length > 0) {
            return data.find(info => info.userId === id);
          }
          return null;
        }
      );
    };
