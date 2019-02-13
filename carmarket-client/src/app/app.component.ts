import { Component } from '@angular/core';

import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';

  constructor(private getDataService: AppService) {}

  getData() {
    this.getDataService.getData().subscribe( data => {
      console.log(data);
    })
  }

  isCarsButtonActive(): boolean {
    return localStorage.getItem("token") ? true : false;
  }

  logout(){
    localStorage.removeItem("token");
  }
}
