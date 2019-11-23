import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostPageComponent } from './post-page/post-page.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    PostDetailsComponent,
    PostPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class SocialNetworkModule { }
