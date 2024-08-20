import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    { id: 'wddeee23r9', title: '1st Post', content: 'This is the content of the 1st post.' },
    { id: '38deu73394', title: '2nd Post', content: 'This is the content of the 2nd post.' },
    { id: '30kfkikeid', title: '3rd Post', content: 'This is the content of the 3rd post.' },
    { id: '30kfkiwis9', title: '4th Post', content: 'This is the content of the 4th post.' },
    { id: '30kfkiiee9', title: '5th Post', content: 'This is the content of the 5th post.' },
    { id: '30kfkisd0e', title: '6th Post', content: 'This is the content of the 6th post.' },
    { id: '30kfkie333', title: '7th Post', content: 'This is the content of the 7th post.' },
  ];

  constructor() {}

  getPosts() {
    return [...this.posts];
  }
}
