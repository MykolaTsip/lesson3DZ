import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {QueryJSONService} from '../../services/query-json.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
