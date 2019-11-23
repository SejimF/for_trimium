import { Component, OnInit, Input } from '@angular/core';
import { IPost, TYPES } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: IPost;

  type: string;
  document: string;
  imgSrc: string;
  geoLoc: string;
  link: string

  constructor() { }

  ngOnInit() {
    this.type = TYPES[this.post.type]
    switch(this.post.type) {
      case TYPES.DOCUMENT: {
        this.document = this.post.content;
        break;
      }
      case TYPES.GEOLOCATION: {
        console.log('geo')
        break;
      }
      case TYPES.LINK: {
        console.log('link')
        break;
      }
      case TYPES.PICTURE: {
        console.log('picture')
        this.imgSrc = `data:image/png;base64,${this.post.content}`;
        break;
      }
    }
    
  }

}
