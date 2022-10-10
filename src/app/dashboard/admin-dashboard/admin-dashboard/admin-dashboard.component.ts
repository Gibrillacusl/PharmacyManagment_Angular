import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  medicineList:Medicine[]=[];

  constructor(private medicineService:MedicineService,private router: Router) { }

  ngOnInit() {
    // this.getAllMedicine();
  }
  // getAllMedicine(){
  //   this.medicineService.getAllMedicines().subscribe(res=>{
  //     this.medicineList=res;
  //     console.log(this.medicineList);
  //   })
  // }
  // addMedicine(){

  // }

}
