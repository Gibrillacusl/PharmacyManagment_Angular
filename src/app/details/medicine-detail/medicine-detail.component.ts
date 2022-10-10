import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

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
  medicineExpDate!:Date
  medicineStock!:number
  medicinePrice!:number
  medicineImg!:string



}
