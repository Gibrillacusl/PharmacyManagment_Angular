import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signUp=new Signup();
  submit(){
    if(this.signUp.Id ==undefined || this.signUp.Name=='' || this.signUp.EmailId=='' || this.signUp.Address=='' ||  this.signUp.Password==''|| this.signUp.PhoneNum==undefined ){
this.toastr.error('Email Fields Cannot Be Empty')
    }
    else{
      this.toastr.success('SignUp Successful')
    } 
  }
}
export class Signup {
  Id!:number;
  Name!:string;
  EmailId!:string;
  Address!:string;
  PhoneNum!:number;
  Password!:string;
}
