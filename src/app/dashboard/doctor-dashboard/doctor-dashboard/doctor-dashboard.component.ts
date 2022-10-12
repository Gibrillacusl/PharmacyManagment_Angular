import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
//medicine: any;

  constructor(private medicineService:MedicineService,private route:Router) { }

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
  }
  }
  )

  }

}


