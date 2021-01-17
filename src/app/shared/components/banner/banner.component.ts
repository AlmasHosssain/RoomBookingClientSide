import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() title : string;
  @Input() subTitle : string
  @Input() link : string
  @Input() btnTxt : string
  constructor() { }

  ngOnInit(): void {
  }

}
