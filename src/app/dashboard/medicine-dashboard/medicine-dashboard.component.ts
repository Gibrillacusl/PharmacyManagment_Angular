import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-dashboard',
  templateUrl: './medicine-dashboard.component.html',
  styleUrls: ['./medicine-dashboard.component.css']
})
export class MedicineDashboardComponent implements OnInit {
  dataSaved = false;
  MedForm: any;
  allMedicines!: Observable<Medicine[]>;
  MedNameUpdate = null;
  massage = null;
  listMedicine:Medicine[]=[];
  constructor(private medicineService:MedicineService) { }

  ngOnInit(): void {

    this.getMedicineDetail();
    this.medicineService.isUpdate.subscribe(res=>{
      if(res){
        this.getMedicineDetail();
      }
    })
  }
  populateMedicine(selectedMed:Medicine){
    console.log(selectedMed);
    this.medicineService.medicineData=selectedMed;
    //let df=this.datepipe.transform(selectedMed.medExpDate,'yyyy-MM-dd');
    //selectedMed.medExpDate=df;

  }
  delete(id:number){
  if(confirm('Are you sure you want to delete the record?')){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log('Record Deleted');
      this.medicineService.getAllMedicines().subscribe(data=>{
        this.listMedicine=data;
    });
  }
  );
}

  }
  getMedicineDetail(){
    this.medicineService.getAllMedicines().subscribe(data=>{
      this.listMedicine=data;
     });
  }
}

