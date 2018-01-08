import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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
  }

  onClick(){
    this.name = "Richard Hendricks";
  }

}

interface Address {
    street: string,
    city: string,
    state: string
}
