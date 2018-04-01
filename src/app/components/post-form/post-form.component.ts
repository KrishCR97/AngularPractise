import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import {Post} from '../../models/Post'
import {PostService} from '../../services/post.service'
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
@Output() newEvent : EventEmitter<Post> = new EventEmitter()
  constructor(private postService : PostService) { }

  ngOnInit() {
  }
addPost(title,body){
  this.postService.savePost({title,body} as Post).subscribe(subscribe =>{
    this.newEvent.emit(subscribe)
    console.log(subscribe)
  })
}
}
