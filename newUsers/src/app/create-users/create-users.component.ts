import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  
  titles: string[] = ['Dr.', 'Prof. Dr.', 'None'];
  userModel = new User();
  constructor() { }

  ngOnInit() {
  
  }

  onSubmit(){
    console.log(this.userModel);
  }
}
