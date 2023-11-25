import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserdbService } from '../userdb.service';
import { User } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []

  constructor(
    private route: ActivatedRoute,
    private userdbService: UserdbService,
    private location: Location
  ) {}


  ngOnInit(): void {
  }


  getUsers() {
    this.userdbService.getUsers().then((result) => {
      this.users = result
    }).catch((err) => {
      console.log(err)
    });
  }

}
