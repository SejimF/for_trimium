import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { mockUsers } from '../mocks/userMocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserById(userId: String): Promise<IUser> {
    return new Promise((resolve, reject) => {
      let user = mockUsers.find(el => {
        return String(el.id) === userId
      });
  
      if (user) {
        resolve(user)
      } else {
        reject('User not found!')
      }
  
    });
  }

}

