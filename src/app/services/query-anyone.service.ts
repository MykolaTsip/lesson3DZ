import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryAnyoneService {

  constructor(private http: HttpClient) { }

  getPost(id): Observable<Post[]> {
   return  this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  getComment(postId): Observable<Comment[]> {
   return  this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
