import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {CreateUserService} from '../create-user.service';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  titles: string[] = ['Dr.', 'Prof. Dr.', 'None'];
  userModel = new User();
  submitted:boolean = false;
  constructor(private _createuserService: CreateUserService) { }

  ngOnInit() {
  
  }

  onSubmit(){
    this.submitted = true;
    this._createuserService.createUser(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
    console.log(JSON.stringify(this.userModel));
    

  }
}
