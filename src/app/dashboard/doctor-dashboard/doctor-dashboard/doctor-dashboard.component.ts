import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  dataSaved = false;
  medicineForm: any;
  allMedicines!: Observable<Medicine[]> ;
  medicineIdUpdate = null;
  massage = null;
  medicineList:Medicine[]=[];
  search!:string;
  selectedMedForOrder:Medicine[]=[];
//medicine: any;

  constructor(private medicineService:MedicineService,private route:Router,private tostr:ToastrService) { }

  ngOnInit() {
    this.getAllMedicine();

  }

  getAllMedicine(){
    this.medicineService.getAllMedicines().subscribe(res=>{
      this.medicineList=res;
      console.log(this.medicineList);
    })
  }
  showDetail(medicine:Medicine){
   this.route.navigate(['details/medicine-detail'],
   {
    queryParams: { MedicineName:medicine.medName,
    MedicineExpDate:medicine.medExpDate,
    MedicinePrice:medicine.medPrice,
    stock:medicine.medStock,
    img:medicine.medImage,
    medId:medicine.medicineId,
  }
  }
  )

  }
  addToCart(medicine:Medicine){
   this.selectedMedForOrder.push(medicine);
   medicine['isSelected']=true;
  }
  remove(medicine:Medicine,i:number){
    medicine['isSelected']=false;
    this.selectedMedForOrder.forEach(data=>{
      if(data.medicineId == medicine.medicineId){
        this.selectedMedForOrder.splice(this.selectedMedForOrder.indexOf(data),1);
      }

    })

  }
  showCart(){
    this.medicineService.isUpdate.next(true);
    this.medicineService.selectedMedicine.next(this.selectedMedForOrder)
    this.route.navigate(['dashboard/cart']);
  }
  logout(){
    localStorage.clear();
    this.tostr.error('User Logged Out');
    this.route.navigate(['']);
  }

}


