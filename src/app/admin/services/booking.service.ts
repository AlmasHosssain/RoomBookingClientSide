import { BehaviorSubject, Observable } from 'rxjs';

import { ErrorHandlerClass } from 'src/app/shared/errorHandaler/ServerRoorHandler';
import { HttpClient } from '@angular/common/http';
import { IBooking } from './../../customer/models/Booking';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

 baseUri : string = environment.SERVER_URL
  constructor(
    private _http : HttpClient
  ) { }

  getAllBookingInfo():Observable<IBooking[]>{
    return this._http.get<IBooking[]>(`${this.baseUri}/admin/get/all/bookings`)
    .pipe(catchError(ErrorHandlerClass.handelError))
  }

  getSingleBooking(id : string):Observable<IBooking>{
    return this._http.get<IBooking>(`${this.baseUri}/admin/get/single/booking/${id}`)
    .pipe(catchError(ErrorHandlerClass.handelError))
  }
}
