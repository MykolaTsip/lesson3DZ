import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {QueryJSONService} from './services/query-json.service';
import {QueryAnyoneService} from './services/query-anyone.service'
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AllUserComponent,
    AllPostComponent,
    AllCommentComponent,
    UserPostComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUserComponent
      },
      {
        path: 'posts', component: AllPostComponent
      },
      {
        path: 'comments', component: AllCommentComponent
      },
      {
        path: 'users/posts/:id', component: UserPostComponent
      },
      {
        path: 'posts/comments/:id', component: PostCommentComponent
      }
    ])
  ],
  providers: [QueryJSONService, QueryAnyoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
