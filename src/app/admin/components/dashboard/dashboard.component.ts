import { Component, OnInit, ViewChild } from '@angular/core';

import { BookingService } from './../../../admin/services/booking.service';
import { IBooking } from './../../../customer/models/Booking';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  bookingList : IBooking[];

  displayedColumns: string[] = ['name', 'phone','roomName','paymentStatus','view'];
  dataSource: MatTableDataSource<IBooking>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private bookingService : BookingService,
    private _router : Router
  ) { }

  ngOnInit(): void {

    this.bookingService.getAllBookingInfo().subscribe((getAllBooking : IBooking[])=>{
      console.log(getAllBooking);
      this.bookingList = getAllBooking
      this.dataSource = new MatTableDataSource(this.bookingList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(id : string){
    this._router.navigate(['/admin/single/booking',id])
  }

}

