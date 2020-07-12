import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class QueryJSONService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return  this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getAllPosts(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts');
  }
  getAllComments(): Observable<Comment> {
    return this.http.get<Comment>('https://jsonplaceholder.typicode.com/comments');
  }


}
