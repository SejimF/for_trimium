import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostPageComponent } from './post-page/post-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    PostDetailsComponent,
    PostPageComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class SocialNetworkModule { }
