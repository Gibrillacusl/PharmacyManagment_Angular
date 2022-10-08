import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {
  }

  loginModel = new Login()
  role!: string


  doctorLogin() {
    if (this.role == "Doctor") {
      this.auth.doctorLogin(this.loginModel).subscribe(
        res => {
          console.log(res)
          this.route.navigate(['dashboard/doctor'])
          this.toastr.success("Login Successful As Doctor")

        },
        error=>{
          this.toastr.error("Invalid Credentials")
        }

      )
    }
    else if(this.role=="Admin"){
      this.auth.adminLogin(this.loginModel).subscribe(
        res => {
          this.route.navigate(['dashboard/admin'])
          this.toastr.success("Login Successful As Admin")
        },
        error=>{
          this.toastr.error("Invalid Credentials")
        }
      )
    }
  }

}

export class Login {
  emailId!: string;
  password!: string
}
