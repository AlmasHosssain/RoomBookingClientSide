import { RouterModule, Routes } from '@angular/router';

import { AllRoomsComponent } from './components/all-rooms/all-rooms.component';
import { BookingComponent } from './components/booking/booking.component';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ErrorResolverService } from './../customer/services/error-resolver.service';
import { NgModule } from '@angular/core';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { SharedModule } from './../shared/shared.module';
import { SliderModule } from 'angular-image-slider';

const routes: Routes = [
  {
    path : '',
    component : CustomerComponent,
    children : [
      {
        path : 'rooms',
        component : AllRoomsComponent,
        resolve : {rooms : ErrorResolverService}
      },
      {
        path : 'room/details/:id',
        component : RoomDetailsComponent
      },
      {
        path : 'booking/:id',
        component : BookingComponent
      },
    ]
  }
];

@NgModule({
  declarations: [CustomerComponent, AllRoomsComponent, BookingComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,
    SliderModule,

  ]
})
export class CustomerModule { }
