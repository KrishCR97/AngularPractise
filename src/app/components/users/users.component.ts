import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/Users';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user : Users = {
  name : '',
  lname : "Kon",
}
users : Users[]
enabled : boolean
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe( data =>{
      console.log(data)
    })
    // this.users = this.dataService.user
    this.dataService.getUsers().subscribe( users =>{
      this.users = users
    })
    this.enabled = true;
  }
  addUser(){
    this.users.push(this.user)
    console.log("In here")
  }
  toogleHide(user : Users){
    user.hide = false
    console.log("clicked")
  }
}
