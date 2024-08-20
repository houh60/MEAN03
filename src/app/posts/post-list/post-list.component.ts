import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
