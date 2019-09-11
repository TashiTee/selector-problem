import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { AppState } from '../../states/post.state';
import { Observable } from 'rxjs';
import * as PostActions from '../../actions/post.actions';
import { selectPostsAll } from '../../selectors/post.selector';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
    this.posts = store.select('post');
  }

  openPost(i) {

  }

  ngOnInit() {
    this.store.dispatch(new PostActions.GetPosts());
    this.posts = this.store.select(selectPostsAll);
  }

}
