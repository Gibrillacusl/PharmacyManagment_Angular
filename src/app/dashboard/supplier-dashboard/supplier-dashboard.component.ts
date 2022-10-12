import { Component, OnInit } from '@angular/core';
import { AddSuppliers, Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class SupplierDashboardComponent implements OnInit {

  constructor(private supplier: SupplierService) { }

  ngOnInit(): void {
    this.getSupplierDetails();
    this.supplier.isAdd.subscribe(res=>{
      if(res){
        this.getSupplierDetails();

      }
    })
  }
  supplierList: Array<Supplier> = [];
  supplierData=new AddSuppliers();
  // supplierId!:number;
  getSupplierDetails() {
    this.supplier.getAllSuppliers().subscribe(res => {
      this.supplierList = res;
    })
  }
  delete(id:number){
    this.supplier.deleteSuupliers(id).subscribe(res =>{
      this.getSupplierDetails();
    })
  }
  edit(supplier:Supplier){
    this.supplierData.medicineId=supplier.medicineId;
    this.supplierData.supplierEmail=supplier.supplierEmail;
    this.supplierData.supplierName=supplier.supplierName;
    this.supplierData.supplierPhnNum=supplier.supplierPhnNum;
    this.supplierData.supplierId=supplier.supplierId;
    this.supplier.isUpdate.next(true)
    // this.supplierId=supplier.supplierId;
  }
}
