import { Component, OnInit } from '@angular/core';
import {QueryJSONService} from '../../services/query-json.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  comments: Comment[];

  constructor(private query: QueryJSONService) {
    this.query.getAllComments().subscribe(value => this.comments = value);
  }
  ngOnInit(): void {
  }

}
