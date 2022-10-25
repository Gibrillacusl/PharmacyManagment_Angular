import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupService } from './services/signup.service';
import { CommonModule } from '@angular/common';
import { HttpInterceptorService } from './services/http-inteceptor.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthGuard } from './shared/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()



  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
} , SignupService,ToastrService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
