import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import {UserComponent} from '../app/components/user/user.component';
import { UsersComponent } from './components/users/users.component'
import { DataService} from '../app/services/data.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
