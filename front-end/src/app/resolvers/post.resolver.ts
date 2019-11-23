import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostPageResolver implements Resolve<IPost> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any>|any {
        const postId = route.paramMap.get('postId');
        this.postService.getPostById(postId)
        .then(post => {
          return post
        })
        .catch(err => {
          console.log(`post resolver - ${err}`);
          return null
        })
  }
}
