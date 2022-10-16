import { Doctor } from "./doctor"
import { Medicine, MedicineForOrder } from "./medicine";

export class Order{
orderId?:number;
orderDate!:Date;
isPickedUp!:boolean;
amount!:number;
count!:number;
docterId!:number;
medicineId!:number;
// doctor!:Doctor
// medicine!:MedicineForOrder
}
export class UpdateOrder{
  orderId:number=0;
  orderDate:string='';
  isPickedUp:boolean=false;
  amount:number=0;
  count:number=0;
  docterId:number=0;
  medicineId:number=0;
  isConfirmed?:boolean=false;
  // doctor!:Doctor
  // medicine!:MedicineForOrder
  }


