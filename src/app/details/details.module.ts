import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {
    path:"medicine-detail",component:MedicineDetailComponent,

  },
]
@NgModule({
  declarations: [
    MedicineDetailComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers:[ToastrService]
})
export class DetailsModule { }
