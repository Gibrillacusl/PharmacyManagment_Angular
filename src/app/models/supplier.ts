import { Medicine } from "./medicine";

export class Supplier {
    supplierId!: number;
    supplierName!: string;
    supplierEmail!: string;
    supplierPhnNum!: number;
    medicineId!: number
    medicine!: Medicine
}
export class AddSuppliers{
    supplierName!: string;
    supplierEmail!: string;
    supplierPhnNum!: number;
    medicineId!: number;
    supplierId?:number;
}
