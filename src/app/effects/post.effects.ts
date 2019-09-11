import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PostService } from './../services/post.service';
import * as PostActions from './../actions/post.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class PostEffects {

    @Effect()
    loadPosts$ = (() => this.action$.pipe(
        ofType(PostActions.GET_POSTS),
        switchMap(() => this.postService.getPosts()
            .pipe(
                map(posts => {
                    return new PostActions.GetPostsSuccess(posts)
                }),
                catchError(() => EMPTY)
            )
        )
    ))

    @Effect()
    addPosts$: Observable<Action> = this.action$.pipe(
        ofType(PostActions.ADD_POST),
        switchMap((action: PostActions.AddPost) => {
            const { payload: post } = action;
            return this.postService.addPost(post).pipe(
                map(post => {
                    return new PostActions.AddPostSuccess(post);
                })
            )
        }
        )
    )

    constructor(
        private action$: Actions,
        private postService: PostService
    ) { }
}