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
 // Чомусь йому Observable неподобається і в консоль окремі пости не виводить через це
  getPost(id): Observable<Post[]> {
    this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  getComment(postId): Observable<Comment[]> {
    this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments??postId=${postId}`);
  }
}
