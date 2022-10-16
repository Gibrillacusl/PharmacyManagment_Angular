import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private toastr: ToastrService) { }
  selectedMedForOrder:Medicine=new Medicine;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{

    this.medicineName=data['MedicineName'];
    this.medicineExpDate=data['MedicineExpDate'];
    this.medicinePrice=data['MedicinePrice'];
    this.medicineStock=data['stock'];
    this.medicineImg=data['img'];

    console.log(data);

    })
  }
  medicineName!:string;
  medicineExpDate!:Date;
  medicineStock!:number;
  medicinePrice!:number;
  medicineImg!:string;
  num:number=0;
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
addToCart(medicine:Medicine){
  this.selectedMedForOrder=medicine;
  medicine['isSelected']=true;

 }

}
