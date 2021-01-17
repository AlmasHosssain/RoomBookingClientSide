import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ErrorHandlerClass } from 'src/app/shared/errorHandaler/ServerRoorHandler';
import { IBooking } from './../models/Booking';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUri = environment.SERVER_URL

  constructor(
    private _http: HttpClient
  ) { }

  postBooking(bookingData : IBooking){
    return this._http.post<IBooking>(`${this.baseUri}/customer/booking`,bookingData,{
      headers : new HttpHeaders({
        'Content-type' : 'application/json'
      })
    })
    .pipe(catchError(ErrorHandlerClass.handelError))
  }
}
