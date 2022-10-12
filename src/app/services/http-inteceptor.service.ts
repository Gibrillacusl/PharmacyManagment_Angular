import {  ToastrService } from 'ngx-toastr';


import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private toaster:ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /// logic start



    let token = localStorage.getItem('token')

    let jwttoken = req.clone({

      setHeaders: {
        Authorization: 'bearer ' + token
      }
    })
    return next.handle(jwttoken)
    .pipe(
      catchError((errormsg:HttpErrorResponse)=>{
        console.log(errormsg);
        if(errormsg.status!=200){
//this.toaster.error(errormsg.message);

       return throwError(errormsg);
        }
        return throwError(errormsg);
      })
    );

  }
}
