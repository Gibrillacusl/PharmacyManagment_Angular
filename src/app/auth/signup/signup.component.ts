import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, public service: SignupService,private route:Router) {}

  ngOnInit(): void {}

  //   signUp=new Signup();
  //   submit(){
  //     if(this.signUp.Id ==undefined || this.signUp.Name=='' || this.signUp.EmailId=='' || this.signUp.Address=='' ||  this.signUp.Password==''|| this.signUp.PhoneNum==undefined ){
  // this.toastr.error('Email Fields Cannot Be Empty')
  //     }
  //     else{
  //       this.toastr.success('SignUp Successful')
  //     }
  //   }
  phoneNumberRegex:any = /[0-9\+\-\ ]/;
  onSubmit(from: NgForm) {
    if (
      this.service.fromData.DocName == '' ||
      this.service.fromData.DocAddress == '' ||
      this.service.fromData.DocEmail == '' ||
      this.service.fromData.DocPassword == ''
    ) {
      this.toastr.error('Fields Cannot Be Empty');
    }
    else if(!this.phoneNumberRegex.test(this.service.fromData.DocPhnNum)&&
    this.service.fromData.DocPhnNum.toString().length<10){
      this.toastr.error('Phone Number is Invalid');
    }
     else {
      this.service.registerdoctor().subscribe((res) => {
        console.log('Submit');
      });
      this.toastr.success('SignUp Successful');
      this.route.navigate(["Login"]);
    }
  }
}
