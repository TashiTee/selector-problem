import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/post.state';
import { Post } from '../../models/post.model';
import * as PostActions from '../../actions/post.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addPost(title, body) {
    this.store.dispatch(new PostActions.AddPost({ title: title, body: body, userId: 1 }))
  }

  ngOnInit() {
  }

}
