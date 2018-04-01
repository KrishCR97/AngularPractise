import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Post} from '../models/Post'
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable()
export class PostService {
postURL = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http : HttpClient) { }

  getPosts() : Observable<Post[]>{
    console.log(this.http.get<Post[]>(this.postURL))
  return this.http.get<Post[]>(this.postURL)
  }
  savePost(post : Post) : Observable<Post>{
  return this.http.post<Post>(this.postURL,post,httpOptions)
  }
}
