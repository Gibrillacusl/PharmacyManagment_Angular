import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  loginModel = new Login()
  role!: string


  doctorLogin() {
    if (this.role == "Doctor") {
      this.auth.doctorLogin(this.loginModel).subscribe(
        res => {
          console.log(res)
          this.toastr.success("Login Successful As Doctor")

        }
      )
    }
    else if(this.role=="Admin"){
      this.auth.adminLogin(this.loginModel).subscribe(
        res => {
          this.toastr.success("Login Successful As Admin")
        }
      )
    }
  }

}

export class Login {
  emailId!: string;
  password!: string
}
