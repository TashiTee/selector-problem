import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './../models/post.model';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts = (): Observable<Post[]> => {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    ) as Observable<Post[]>;
  }

  addPost = (payload: Post): Observable<Post> => {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', payload) as Observable<Post>;
  }

}
