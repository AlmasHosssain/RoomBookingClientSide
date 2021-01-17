import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IRooms } from 'src/app/shared/models/IRooms';

@Component({
  selector: 'app-feature-rooms',
  templateUrl: './feature-rooms.component.html',
  styleUrls: ['./feature-rooms.component.scss']
})
export class FeatureRoomsComponent implements OnInit {

  featureRooms : IRooms[]
  errorMessage : string;
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ) {}

  ngOnInit(): void {
    const resolvedRoomData : IRooms[] | string = this._activatedRoute.snapshot.data['featureRooms']
      if (Array.isArray(resolvedRoomData)) {
        this.featureRooms = resolvedRoomData.slice(0,3)
      }else{
        this.errorMessage = 'There is an error. Try again later..'
      }
  }

  goDetails(id : string){
    this._router.navigate(['/customer/room/details',id])
  }
}
