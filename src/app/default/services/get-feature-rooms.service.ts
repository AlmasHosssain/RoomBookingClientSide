import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ErrorHandlerClass } from '../../shared/errorHandaler/ServerRoorHandler'
import { IRooms } from 'src/app/shared/models/IRooms';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureRoomsService {

  private baseUrl: string = environment.SERVER_URL;

  constructor(
    private _http: HttpClient
  ) { }

  getAllRoomsInfo(): Observable<IRooms[]> {
    return this._http.get<IRooms[]>(`${this.baseUrl}/customer/rooms`)
      .pipe(catchError(ErrorHandlerClass.handelError))
  }

}
