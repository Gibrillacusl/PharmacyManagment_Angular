export class Medicine {
   medicineId:number=0;
   medName:string='';
   medPrice!:number;
   medExpDate!:string;
   medStock!:number;
   medImage:string='';
   isSelected?:boolean;
   medCount:number=0;
}

export class MedicineForOrder{
  medicineId:number=0;
   medName:string='';
   medPrice!:number;
   medExpDate:string='2022-10-14T17:47:48.029Z';
   medStock:number=1;
   medImage:string='';
   isSelected?:boolean;
}

