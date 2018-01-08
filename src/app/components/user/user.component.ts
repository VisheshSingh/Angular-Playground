import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name: string = "John Doe";
  age: number = 25;
  email: string = "JohnDoe@hooli.com";
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
  
  constructor() { 
    console.log("Constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
  }

}
