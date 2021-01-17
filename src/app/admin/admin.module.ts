import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ViewSingleBookingComponent } from './components/view-single-booking/view-single-booking.component';

const routes: Routes = [
  {
    path : '',
    component : AdminComponent,
    children : [
      {
        path : 'login',
        component : LoginComponent,
      },
      {
        path : 'dashboard',
        canActivate : [AdminGuard],
        component : DashboardComponent
      },
      {
        path : 'single/booking/:id',
        component : ViewSingleBookingComponent
      }
    ]
  }
];


@NgModule({
  declarations: [AdminComponent, DashboardComponent, LoginComponent,ViewSingleBookingComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
