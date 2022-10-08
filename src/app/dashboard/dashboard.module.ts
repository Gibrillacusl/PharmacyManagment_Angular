import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/pipe/filter.pipe';


const routes: Routes =[
  {
    path:'doctor',component:DoctorDashboardComponent
  },
  {
    path:'admin',component:AdminDashboardComponent
  }
]

@NgModule({
  declarations: [DoctorDashboardComponent,AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

    FormsModule


  ],
  //providers:[FormBuilder]
})
export class DashboardModule { }
