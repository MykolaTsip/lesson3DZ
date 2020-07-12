import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {QueryJSONService} from '../../services/query-json.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {


  users: User[];

  constructor(private query: QueryJSONService) {
    this.query.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
