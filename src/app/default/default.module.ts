import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ErrorResolverService } from './services/error-resolver.service';
import { FeatureRoomsComponent } from './component/feature-rooms/feature-rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    resolve : {featureRooms : ErrorResolverService}
  }
]

@NgModule({
  declarations: [FeatureRoomsComponent,DefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ]
})
export class DefaultModule { }
