import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';
import {QueryAnyoneService} from '../../services/query-anyone.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  UserPost: Post[];

  constructor(private query: QueryAnyoneService, private activ: ActivatedRoute) {

    this.activ.params.subscribe(value => {
     this.query.getPost(value.id).subscribe(post => console.log(post));
    });



  }

  ngOnInit(): void {
  }

}
