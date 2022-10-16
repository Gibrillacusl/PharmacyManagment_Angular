import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { MedicineDashboardComponent } from './medicine-dashboard/medicine-dashboard.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { MedicineFormComponent } from './medicine-dashboard/medicine-form/medicine-form.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/http-inteceptor.service';
import { SupplierFormComponent } from './supplier-dashboard/supplier-form/supplier-form.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';


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
  {
    path:'cart',component:CartComponent
  },
  {
    path:'sales',component:SalesReportComponent
  },
  {
    path:'order',component:OrderDashboardComponent
  }

]

@NgModule({
  declarations: [DoctorDashboardComponent,AdminDashboardComponent, MedicineDashboardComponent, SupplierDashboardComponent, MedicineFormComponent, SupplierFormComponent, CartComponent, SalesReportComponent, OrderDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ToastrModule.forRoot(),

    FormsModule


  ],
  providers:[ToastrService,DatePipe]
})
export class DashboardModule { }
