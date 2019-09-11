import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Post } from './../models/post.model'

export const GET_POSTS = '[POST] Get'
export const GET_POSTS_SUCCESS = '[POST] Get SUCCESS'
export const GET_POSTS_FAIL = '[POST] Get FAIL'
export const ADD_POST = '[POST] Add'
export const ADD_POST_SUCCESS = '[POST] Add SUCCESS'
export const ADD_POST_FAIL = '[POST] Add FAIL'
export const REMOVE_POST = '[POST] Remove'

export class GetPosts implements Action {
    readonly type = GET_POSTS

    constructor() { }
}

export class GetPostsSuccess implements Action {
    readonly type = GET_POSTS_SUCCESS

    constructor(public payload: Post[]) { }
}

export class AddPost implements Action {
    readonly type = ADD_POST

    constructor(public payload: Post) { }
}

export class AddPostSuccess implements Action {
    readonly type = ADD_POST_SUCCESS

    constructor(public payload: Post) { }
}

export class RemovePost implements Action {
    readonly type = REMOVE_POST

    constructor(public payload: number) { }
}

export type Actions = AddPost | RemovePost | GetPosts | GetPostsSuccess | AddPostSuccess