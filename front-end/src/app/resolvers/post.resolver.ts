import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<IPost> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
        const postId = route.paramMap.get('id');
        this.postService.getPostById(postId);
        return;
  }
}
