import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeadersComponent, FooterComponent, BackgroundImageComponent, BannerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
  ],
  exports : [
    MaterialModule,
    HeadersComponent,
    FooterComponent,
    BackgroundImageComponent,
    BannerComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    //BsDatepickerModule.forRoot(),
  ]
})
export class SharedModule { }
