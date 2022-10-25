import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Medicine, MedicineForOrder } from 'src/app/models/medicine';
import { Order } from 'src/app/models/order';
import { MedicineService } from 'src/app/services/medicine.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private medicine: MedicineService,
    private toastr: ToastrService,
    private order:OrderService,
  ) {}

  ngOnInit(): void {
    this.medicine.isUpdate.subscribe(d=>{
      if(d){
        this.medicine.selectedMedicine.subscribe((data) => {
          this.selectedMed = data;
          data.forEach(x=>{
            this.medList.push(Number(x.medPrice));
            this.totalAmount += Number(x.medPrice);
          })

          this.selectedMed.forEach((data) => {
            data['medCount'] = 1;
            this.totalCount += data.medCount;
          });

        });
      }
    })
    this.getDocByEmail();

  }
  selectedMed: Medicine[] = [];
  medList:any[]=[];
  num: number = 0;
  totalAmount:number=0;
  totalCount:number=0;
  orderModel!:Order;
  docDetail!:any;

  add(medicineStock: number, medCount: number,medicine:Medicine,i:number ) {
    this.medicine.isUpdate.next(false);
      if (medCount < Number(medicineStock)) {
       medicine['medCount'] += 1;
       medicine['medPrice']=Number(medicine['medPrice']) + this.medList[i];
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
  this.totalAmount=0;
  this.totalCount=0;
  this.selectedMed.forEach(data=>{

  this.totalAmount += data.medPrice;
  this.totalCount  += data.medCount;
 })
 }

 placeOrder(){
  let obj:Order={} as Order;
  //let ord:Array<Order>;
  this.selectedMed.map(data=>{

    // this.orderModel.medicineId=data.medicineId;
    // this.orderModel.amount=data.medPrice;
    // this.orderModel.count=data.medCount;
    // this.orderModel.isPickedUp=false;
    // this.orderModel.orderDate=new Date();
    // this.orderModel.docterId=this.docDetail.doctorId;
    obj={

    medicineId:data.medicineId,
    amount:this.totalAmount+100,
    count:this.totalCount,
    isPickedUp:true,
    orderDate:new Date(),
    docterId:this.docDetail.doctorId,
    // doctor: new Doctor(),
    // medicine: new MedicineForOrder(),
  }
  return obj;
  //ord.push(JSON.parse(JSON.stringify(obj)));




  })
  this.order.placeOrder(obj).subscribe(data=>{
    console.log(data);
    this.toastr.success('Order Placed successfully');
  })

 }
 getDocByEmail(){
  let emailId=localStorage.getItem('emailId');
  this.order.getDocByEmail(emailId).subscribe(data=>{
   this.docDetail=data;
  })
 }

  }

