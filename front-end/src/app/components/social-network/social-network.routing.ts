import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostPageResolver } from 'src/app/resolvers/postPage.resolver';

export const PAGE_ROUTES: Routes = [
    {
        path: ':postId',
        component: PostPageComponent,
        resolve: {
            data: PostPageResolver   
        }
    }
]
