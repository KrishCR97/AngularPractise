import { Injectable } from '@angular/core';
import {Users} from '../models/Users'
import {Observable} from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
@Injectable()
export class DataService {
user : Users[]
data : Observable<any>
  constructor() { 
   this.user = [{
      name : 'Kishon',
      age : 22,
      lname : 'Kumar',
      address : {
          street : 'Any Street',
          city : 'Any city',
          state : 'MO'
      },
      hide : true
  },
  {
    name : 'Naren',
    age : 20,
    lname : 'Kondreddi',
    address : {
        street : 'Hello',
        city : 'Hel',
        state : 'MY'
    },
    hide : true
},
{
  name : 'Veera',
  age : 22,
  lname : 'Kishon',
  address : {
      street : 'H1',
      city : 'San Francisco',
      state : 'MI'
  },
  hide : true
}]
  }
getUsers() : Observable<Users[]>{
  return of(this.user)
}
getData() {
  this.data = new Observable(
    observer =>{
      setTimeout(()=>{
        observer.next(1)
      },1000)
      setTimeout(()=>{
        observer.next(2)
      },2000)
      setTimeout(()=>{
        observer.next(3)
      },3000)
    }
    
  )
  return this.data
}
}
