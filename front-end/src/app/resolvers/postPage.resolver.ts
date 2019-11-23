import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';

@Injectable({ providedIn: 'root' })
export class PostPageResolver implements Resolve<IPost> {
  constructor(
    private postService: PostService,
    private userService: UserService
    ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
        const postId = route.paramMap.get('postId');
        try {
          let author: IUser;
          const post: IPost = await this.postService.getPostById(postId);

          if (post) {
            
             author = await this.userService.getUserById( String(post.authorId));
          } else {
            console.log(`post page resolver post - Post not found`);
            return null;
          }
          
          if (author) {
            return {post, author};
          } else {
            console.log(`post page resolver author - Author not found`);
            return null;
          }

        } catch(e) {
          console.log(`post page resolver - ${e}`);
          return null;
        }

  }
}
