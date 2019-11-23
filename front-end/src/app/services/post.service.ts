import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { mockPosts } from '../mocks/postMocks';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {}

getPostById(postId): Promise<IPost> {
  return new Promise((resolve, reject) => {
    let post = mockPosts.find(el => {
      return String(el.id) === postId
    });

    if (post) {
      resolve(post)
    } else {
      reject('Post not found!')
    }

  });
}

}
