import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit() {

  }

}
