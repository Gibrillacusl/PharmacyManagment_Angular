import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private toastr: ToastrService,public route:Router,public medicineService:MedicineService) { }

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(data=>{
    this.medicineId=data['medId'];
    this.medicineName=data['MedicineName'];
    this.medicineExpDate=data['MedicineExpDate'];
    this.medicinePrice=data['MedicinePrice'];
    this.medicineStock=data['stock'];
    this.medicineImg=data['img'];

    console.log(data);

    })
  }
  medicineId!:number;
  medicineName!:string;
  medicineExpDate!:string;
  medicineStock!:number;
  medicinePrice!:number;
  medicineImg!:string;
  num:number=1;
  add(){
   if(this.num<this.medicineStock){
   this.num += 1;
   }
   else{
    this.toastr.error("Limit Exceeded");
   }

  }
  remove(){
   if(this.num!=0){
    this.num -= 1;
  }
}
addToCart(){

  let selectedMedForOrder=[{
    medicineId:this.medicineId,
   medName:this.medicineName,
   medPrice:this.medicinePrice,
   medExpDate:this.medicineExpDate,
   medStock:this.medicineStock,
   medImage:this.medicineImg,

   medCount:this.num,
  }]
  this.medicineService.isUpdate.next(true);
  this.medicineService.selectedMedicine.next(selectedMedForOrder);

  this.route.navigate(['dashboard/cart']);
  console.log(selectedMedForOrder);

 }

}
