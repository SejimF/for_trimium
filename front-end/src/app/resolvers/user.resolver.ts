// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { IUser } from '../models/user';
// import { UserService } from '../services/user.service';


// @Injectable({ providedIn: 'root' })

// export class UserResolver implements Resolve<IUser> {
//     constructor(private userService: UserService) {}

//     resolve(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//       ): Promise<any>|any {
//             const userId = route.paramMap.get('userId');
//             this.userService.getUserById(userId)
//             .then(user => {
//               return user
//             })
//             .catch(err => {
//               console.log(`user resolver - ${err}`);
//               return null
//             })
//       }

// }