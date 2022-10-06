import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastNoAnimationModule, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
    
  },
{
  path:"Login",component:LoginComponent,
},
{
  path:"About",component:AboutComponent,
},
{
  path:"Sign-Up",component:SignupComponent
}
];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    // ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,})
    
  ],
  providers:[ToastrService]
})
export class AuthModule { }
