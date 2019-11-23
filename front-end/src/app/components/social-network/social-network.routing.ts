import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostResolver } from 'src/app/resolvers/post.resolver';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostPageComponent } from './post-page/post-page.component';

export const PAGE_ROUTES: Routes = [
    {
        path: ':id',
        component: PostPageComponent,
        resolve: {
            post: PostResolver   
        }
    }
]
