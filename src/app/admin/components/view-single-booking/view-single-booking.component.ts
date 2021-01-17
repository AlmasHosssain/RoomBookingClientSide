import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BookingService } from './../../../admin/services/booking.service';
import { IBooking } from 'src/app/customer/models/Booking';

@Component({
  selector: 'app-view-single-booking',
  templateUrl: './view-single-booking.component.html',
  styleUrls: ['./view-single-booking.component.scss']
})
export class ViewSingleBookingComponent implements OnInit {

  singleBooking : IBooking;
  constructor(
    private _activatedRouter : ActivatedRoute,
    private bookingService : BookingService
  ) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe((params:ParamMap)=>{
      let bookingId = params.get('id')
      this.bookingService.getSingleBooking(bookingId).subscribe((singleBookingInfo: IBooking)=>{
        this.singleBooking = singleBookingInfo
      })
    })
  }

}
