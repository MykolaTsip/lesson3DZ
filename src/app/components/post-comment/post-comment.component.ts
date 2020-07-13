import { Component, OnInit } from '@angular/core';
import {QueryAnyoneService} from '../../services/query-anyone.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  PostComment: Comment[];

  constructor(private query: QueryAnyoneService, private route: ActivatedRoute) {
    this.route.params.subscribe(value => {
      this.query.getComment(value.id).subscribe(comment => this.PostComment = comment);
    });
  }

  ngOnInit(): void {
  }

}
