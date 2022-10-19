import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order, UpdateOrder } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  constructor(private order:OrderService,private tostr:ToastrService) { }

  ngOnInit(): void {
    this.getAllOrder();

  }
  ord=new UpdateOrder();
  orderList:any[]=[];
  tabs=[{name:'New Orders',id:1},
  {name:'Confirmed Orders',id:2}];
  selectedTabIndex:number=0;
  confirmedList:Order[]=[];

  confirmPickedUp(id:number,list:UpdateOrder){
    if(id){
    this.ord.orderId=id;
    this.ord.amount=list.amount;
    this.ord.count=list.amount;
    this.ord.docterId=list.docterId;
    this.ord.isPickedUp=true;
    this.ord.medicineId=list.medicineId;
    this.ord.orderDate=list.orderDate;
    //this.ord.isConfirmed=true;
    this.order.updatePickedUp(id,this.ord).subscribe(data=>{
    this.tostr.success("Order confirmed");
    list['isConfirmed']=true;
  })
}
  }
  getAllOrder(){
    this.order.getAllOrders().subscribe(data=>{
      this.orderList=data;
    })
  }
  getConfirmedPickup(){
 this.order.getConfirmedPickUp().subscribe(data=>{
  this.confirmedList=data;
 })
  }
  onSelectTab(i:number){
    this.selectedTabIndex=i;
    if(this.selectedTabIndex==0){
      this.getAllOrder();
    }
    else if(this.selectedTabIndex==1){
     this.getConfirmedPickup();
    }
  }


}
