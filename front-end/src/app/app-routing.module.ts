import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SocialNetworkModule } from './components/social-network/social-network.module';
import { PAGE_ROUTES } from './components/social-network/social-network.routing';


const routes: Routes = [
  {
    path: "pageNotFound",
    component: PageNotFoundComponent
  },
  
  {
    path: 'post',
    children: PAGE_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
