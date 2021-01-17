import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { IRooms } from 'src/app/shared/models/IRooms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsService } from './rooms.service';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ErrorResolverService implements Resolve<IRooms[] | string>{

  constructor(
    private roomsService : RoomsService
  ) { }


  resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRooms[] | string> => {
    return this.roomsService.getAllRoomsInfo()
        .pipe(
          map((roomsData)=>{return roomsData}),
          catchError((err:string)=>{return err})
        )
  }
}
