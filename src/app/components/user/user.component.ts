import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Posts;
  isEdit: boolean = false;

  constructor(private DS: DataService) { 
    console.log("Constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");

    this.name = "John Doe";
    this.age = 25;
    this.email = "JohnDoe@gmail.com";
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ["Write code", "Play Music", "Photography", "Design"];

    this.DS.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    })
  }

  onClick(){
    this.name = "Richard Hendricks";
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
    street: string,
    city: string,
    state: string
}

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}
