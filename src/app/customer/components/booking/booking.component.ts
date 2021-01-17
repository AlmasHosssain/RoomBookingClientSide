import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { BookingService } from './../../services/booking.service';
import { IBooking } from '../../models/Booking';
import { IBookingRoomInfo } from '../../models/BookingRoomInfo';
import { IRooms } from './../../../shared/models/IRooms';
import { RoomsService } from './../../services/rooms.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  customerData: FormGroup;
  bookingRoomInfo : IBookingRoomInfo[] =[];

  constructor(
    private fb: FormBuilder,
    private bookingService : BookingService,
    private roomsService : RoomsService,
    private _activateRoute : ActivatedRoute,
    private _router : Router,
    private _snackBar: MatSnackBar
  ) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.customerData = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required,Validators.email]],
      phoneNo: ['', Validators.required],
      address: ['', Validators.required],
      duration: ['', Validators.required],
      paymentStatus: ['', Validators.required]
    })

    this._activateRoute.paramMap.subscribe((params : ParamMap)=>{
      let roomId = params.get('id')
      this.roomsService.getSingleRoomInfo(roomId).subscribe((data : IRooms)=>{
        let {price,roomName} = data
        this.bookingRoomInfo.push({roomName, costPerDay: price})
      })
    })

  }

  onSubmit(){
      let { customerName,email,phoneNo,address,duration,paymentStatus } = this.customerData.value
      let postedObject : IBooking= {
        customerName,
        email,
        phoneNo,
        address,
        duration,
        paymentStatus,
        roomDescription : this.bookingRoomInfo
      }

      this.bookingService.postBooking(postedObject).subscribe(data=>{
        this._snackBar.open('Booking Complete..!', 'Relax', {
          duration: 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })

      this._router.navigate(['/'])
  }

}
