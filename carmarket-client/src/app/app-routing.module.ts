import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'cars', component: CarsComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'process-parameter-plots', component: ProcessParameterPlotsComponent}, 
  // {path: 'real-time-sensor-data', component: RealTimeSensorDataComponent},
  // {path: 'batch-distribution', component: BatchDistributionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
