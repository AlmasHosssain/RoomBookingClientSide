import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path : '',
    loadChildren : ()=>import('./default/default.module').then(m=>m.DefaultModule)
  },
  {
   path : 'admin',
   loadChildren : ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path : 'customer',
    loadChildren : ()=>import('./customer/customer.module').then(m=>m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
