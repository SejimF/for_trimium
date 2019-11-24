import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { IUser } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

   post: IPost;
   author: IUser;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    const data = this.route.snapshot.data.data

    if (data) {
      this.post = data.post;
      this.author = data.author;
    }
    
  }

}
