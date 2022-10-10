import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { MedicineDashboardComponent } from './medicine-dashboard/medicine-dashboard.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { MedicineFormComponent } from './medicine-dashboard/medicine-form/medicine-form.component';


const routes: Routes =[
  {
    path:'doctor',component:DoctorDashboardComponent
  },
  {
    path:'admin',component:AdminDashboardComponent
  },
  {
    path:'medicine',component:MedicineDashboardComponent
  },
  {
    path:'supplier',component:SupplierDashboardComponent
  },

]

@NgModule({
  declarations: [DoctorDashboardComponent,AdminDashboardComponent, MedicineDashboardComponent, SupplierDashboardComponent, MedicineFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,


    FormsModule


  ],
  //providers:[FormBuilder]
})
export class DashboardModule { }
