import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private medicine: MedicineService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.medicine.isUpdate.subscribe(d=>{
      if(d){
        this.medicine.selectedMedicine.subscribe((data) => {
          this.selectedMed = data;
          data.forEach(x=>{
            this.medList.push(x.medPrice);
            this.totalAmount += x.medPrice;
          })

          this.selectedMed.forEach((data) => {
            data['medCount'] = 1;
            this.totalCount += data.medCount;
          });

        });
      }
    })

  }
  selectedMed: Medicine[] = [];
  medList:any[]=[];
  num: number = 0;
  totalAmount:number=0;
  totalCount:number=0;

  add(medicineStock: string, medCount: number,medicine:Medicine,i:number ) {
    this.medicine.isUpdate.next(false);
      if (medCount < Number(medicineStock)) {
       medicine['medCount'] += 1;
       medicine['medPrice'] += this.medList[i];
      this.totalAmount += this.medList[i];
      this.totalCount +=1;
      } else {
        this.toastr.error('Limit Exceeded');
      }

  }
  remove( medCount: number ,medicine:Medicine,i:number) {

      if (medCount != 1) {
       medicine[ 'medCount'] -= 1;
       medicine['medPrice'] -= this.medList[i];
       this.totalAmount -= this.medList[i];
       this.totalCount -= 1;
      }
    }
 delete(i:number){
  this.selectedMed.splice(i,1);
 this.selectedMed.forEach(data=>{
  this.totalAmount=0;
  this.totalCount=0;
  this.totalAmount += data.medPrice;
  this.totalCount  += data.medCount;
 })
 }

  }

