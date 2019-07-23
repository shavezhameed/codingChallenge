import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {CreateUserService} from '../create-user.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  titles = ['Dr.','Prof. Dr.','None'];
  userModel = new User();
  submitted:boolean = false;
  maxDate:Date;
  errorMsg = '';
  constructor(private _createuserService: CreateUserService) { 
    this.maxDate = new Date();
  }

  ngOnInit() {
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  //For submitting form
  onSubmit(){
    this.submitted = true;
    this._createuserService.createUser(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => this.errorMsg = error.statusText
    );
  }
}
