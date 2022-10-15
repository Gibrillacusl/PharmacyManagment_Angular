import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  orderList:Order[]=[];
  SalesReportService: any;
  fromDate:string='';
  toDate:string='';



  constructor(private orderService:OrderService,private toastr:ToastrService,private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getAllOrders().subscribe(data=>{
      this.orderList=data;
    })
  }
  getSales(){
  if(this.fromDate=='' || this.toDate=='' ){
    this.toastr.error('Please select the date range');
  }
  else{
    let fromDate=this.datePipe.transform(this.fromDate,'yyyy-MM-dd');
    let toDate=this.datePipe.transform(this.toDate,'yyyy-MM-dd');


    this.orderService.getOrdersByDate(fromDate,toDate).subscribe(data=>{
      this.orderList=data;
    },err=>{
      this.toastr.error('Could not find data at this moment');
    })


  }


  }

}
