import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = { username:'', password: ''};
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  login(){
    this.dataService.login(this.user).subscribe(data => {
      localStorage.setItem("token", data.token)
      alert("success!");
      this.user.password = ""
      this.user.username = ""
    }, error => {
      this.user.password = ""
      this.user.username = ""
      alert("login failed")
    });
  }
}
