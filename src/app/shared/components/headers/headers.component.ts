import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  authenticVariable : string
  showDashboard : boolean
  constructor() {
    this.authenticVariable = localStorage.getItem('authentication')
    if (this.authenticVariable == 'true') {
      this.showDashboard = true
    }else{
      this.showDashboard = false
    }
  }

  ngOnInit(): void {
  }

}
