import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

import { FeatureRoomsService } from './get-feature-rooms.service';
import { IRooms } from 'src/app/shared/models/IRooms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorResolverService implements Resolve<IRooms[] | string>{

  constructor(
    private featureRoomsService : FeatureRoomsService
  ) { }

  resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRooms[] | string> => {
    return this.featureRoomsService.getAllRoomsInfo()
        .pipe(
          map((roomsData)=>{return roomsData}),
          catchError((err:string)=>{return err})
        )
  }
}
