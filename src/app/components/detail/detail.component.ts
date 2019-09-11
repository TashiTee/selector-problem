import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { AppState } from '../../states/post.state';
import { Observable } from 'rxjs';
import { selectPost } from '../../selectors/post.selector';

import { PostService }  from '../../services/post.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  post: Observable<Post>;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>,
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.post = this.store.select(selectPost(id))

  }
  goBack(): void {
    this.location.back();
  }

}
