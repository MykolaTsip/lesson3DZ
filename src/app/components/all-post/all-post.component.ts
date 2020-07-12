import { Component, OnInit } from '@angular/core';
import {QueryJSONService} from '../../services/query-json.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  posts: Post[];

  constructor(private query: QueryJSONService) {
    this.query.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
