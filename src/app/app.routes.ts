
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

 
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserTrackComponent } from './admin-user-track/admin-user-track.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path: 'users',
      component: UsersComponent,
      data: { title: 'Users List' }
    },
    {
      path: 'users/:id',
      component: UserDetailComponent,
      data: { title: 'User Details' }
    },
    {
      path: 'admin',
      component: AdminComponent,
      data: { title: 'Admin' }
    },
    {
      path: 'admin/users',
      component: AdminUsersComponent,
      data: { title: 'Admin - Users List' }
    },
    {
      path: 'admin/users/:id',
      component: AdminUserTrackComponent,
      data: { title: 'Admin-User Track' }
    },
    {
      path: 'user-create',
      component: UserCreateComponent,
      data: { title: 'Create User' }
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Create User' }
    },

    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
  


export const AppRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);

// RouterModule.forRoot(
//     appRoutes,
//     { enableTracing: true } // <-- debugging purposes only
//   )