import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, public service: SignupService,private route:Router) {}

  ngOnInit(): void {
    this.getDocterByName();
    this.refresh();
  }

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
  passwordRegex:any=/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/;
  docList:any=[];
  onSubmit(from: NgForm) {
        let isDocExist=this.docList.filter((data:any)=>{
        return this.service.fromData.DocEmail==data.docEmail;
    })
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
    else if(isDocExist.length>0){
      this.toastr.error('Docter alrerdy exist');
    }
    else if(!this.passwordRegex.test(this.service.fromData.DocPassword)){
      this.toastr.error('Strong Password required');
    }
     else {
      this.service.registerdoctor().subscribe((res) => {
      console.log('Submit');
      this.toastr.success('SignUp Successful');
      this.route.navigate(["Login"]);
      },errors=>{
        this.toastr.error('Invalid Email address or Phone number');
      });

    }
  }
  getDocterByName(){
    this.service.getDoctorByName().subscribe(res=>{
      this.docList=res;
    })
  }
  refresh(){
    this.service.fromData=new Doctor();
  }
}

