import {Component, OnInit} from '@angular/core';
import {Users} from '../../models/Users'

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls :['./user.component.css']
})

export class UserComponent implements OnInit{
    user : Users

constructor(){
this.user = {
    name : 'Kishon',
    age : 22,
    lname : 'Kumar',
    address : {
        street : 'Any Street',
        city : 'Any city',
        state : 'MO'
    },
    hide : true
}
}
ngOnInit(){
    //It is a lifew cycle method
}
}
