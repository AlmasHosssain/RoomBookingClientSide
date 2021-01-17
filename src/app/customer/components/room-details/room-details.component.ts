import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IRooms } from './../../../shared/models/IRooms';
import { ISubImages } from './../../../shared/models/ISubImage';
import { RoomsService } from './../../services/rooms.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  singleRoom : IRooms;
  subImageList : ISubImages[]
  constructor(
    private _activateRoute : ActivatedRoute,
    private roomsService : RoomsService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe((params:ParamMap)=>{
      let roomId = params.get('id')
      this.roomsService.getSingleRoomInfo(roomId).subscribe((singleRoomInfo : IRooms)=>{
        this.singleRoom = singleRoomInfo
        this.subImageList = this.singleRoom.subImage
        console.log(this.subImageList)
      })
    })
  }

  goForBooking=(id :String)=>{
    this._router.navigate(['/customer/booking',id])
  }

}
