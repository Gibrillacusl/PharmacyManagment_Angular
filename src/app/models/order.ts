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


