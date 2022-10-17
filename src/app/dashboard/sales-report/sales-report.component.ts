import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver'
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
//import { jsPDF } from "jspdf";

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
//   exportPdf() {
//     import("jspdf").then(jsPDF => {
//         import("jspdf-autotable").then(x => {
//             const doc = new jsPDF.default(0,0);
//             doc.autoTable('', this.orderList);
//             doc.save('products.pdf');
//         })
//     })
// }
exportExcel() {
  let filteredOrder:any[]=[];
  this.orderList.forEach(data=>{
    filteredOrder.push(
    {'Order Id':data.orderId,
    'Order Date':data.orderDate,
    'PickedUp Status':data.isPickedUp,
    'Toatal Amount':data.amount,
    'Items':data.count
    }


    )
  })
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(filteredOrder);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
  });
}
saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
}

