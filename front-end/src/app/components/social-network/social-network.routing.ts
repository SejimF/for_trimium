import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostResolver } from 'src/app/resolvers/post.resolver';

export const routes: Routes = [
    {
        path: 'post/:id',
        component: MOCK,
        resolve: {
            post: PostResolver   
        }
    }
]

export const routing = RouterModule.forChild(routes);