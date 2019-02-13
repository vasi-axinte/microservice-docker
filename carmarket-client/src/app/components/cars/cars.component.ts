import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Car } from '../models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataService.getCarData().subscribe(data => {
      this.cars = data;
    })
  }
}
