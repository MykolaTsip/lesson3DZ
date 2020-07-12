import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {QueryJSONService} from '../../services/query-json.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input()
   comment: Comment;




  ngOnInit(): void {
  }

}
