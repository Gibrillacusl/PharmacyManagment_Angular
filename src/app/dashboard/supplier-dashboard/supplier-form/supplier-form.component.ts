import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddSuppliers, Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
  }
  @Input() supplier=new AddSuppliers();
  isShow:boolean=false;
  // @Input() supplierId!:number;
  submit(myForm:NgForm){
    this.supplierService.isUpdate.subscribe(res=>{
      if(res){
        this.isShow=true;
        this.supplierService.updateSuppliers(this.supplier.supplierId,this.supplier).subscribe(res=>{
          this.supplierService.isAdd.next(true);
        })
      }
      else{
        this.supplierService.addSuppliers(this.supplier).subscribe(res=>{
          this.supplierService.isAdd.next(true);
        })
      }
    })

  }
  add(){
    this.isShow=true;
  }



}
