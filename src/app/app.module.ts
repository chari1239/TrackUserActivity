import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserTrackComponent } from './admin-user-track/admin-user-track.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

//filter
import { Pipe, PipeTransform } from '@angular/core';
import { clickNumToStringPipe } from './pipes/clickNumToString.pipe';
//routes
import { routing, AppRoutingProviders } from './app.routes';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminUserTrackComponent,
    UserDetailComponent,
    clickNumToStringPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent,AppRoutingProviders]
})
export class AppModule { }
