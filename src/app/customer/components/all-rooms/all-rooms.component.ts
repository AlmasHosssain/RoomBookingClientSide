import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IRooms } from 'src/app/shared/models/IRooms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {

  rooms : IRooms[];
  imagesUrl : Object[] = [];
  errorMessage : string;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    const resolvedRoomData : IRooms[] | string = this._activatedRoute.snapshot.data['rooms']
      if (Array.isArray(resolvedRoomData)) {
        this.rooms = resolvedRoomData;
        this.rooms.forEach(singleRoom=>{
          let {mainImage} = singleRoom
          this.imagesUrl.push(mainImage)
        })
      }else{
        this.errorMessage = 'There is an error. Try again later..'
      }
      console.log(this.imagesUrl)
  }

  goDetails(id : string){
    this._router.navigate(['/customer/room/details',id])
  }
}
