import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent implements OnInit {

  constructor(public medicineService:MedicineService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
 submit(form:NgForm){
 console.log('working');

    if(this.medicineService.medicineData.medicineId==0)
      this.insertMed(form);
     else
     this.updateMed(form);
 }
 insertMed(myform:NgForm){
  this.medicineService.saveMedicine().subscribe(data=>{
  this.resetForm(myform);
  this.refresh();
  console.log('saved');
  this.medicineService.isUpdate.next(true);
 },err=>{
  this.toastr.error("Please enter a valid input")
});
}
 updateMed(myform:NgForm){
    this.medicineService.updateMedicine().subscribe(data=>{
    this.resetForm(myform);
    this.refresh();
    console.log('saved');
    this.medicineService.isUpdate.next(true);

   },err=>{
    this.toastr.error("Please enter a valid input")
  });
 }
 resetForm(myform:NgForm){
 myform.form.reset();
 this.medicineService.medicineData=new Medicine();
 }
 refresh(){
  this.medicineService.getAllMedicines().subscribe(res=>{
    this.medicineService.listMedicine=res;
  });
 }
 cancel(){
  this.medicineService.isUpdate.next(true);
 }
}
