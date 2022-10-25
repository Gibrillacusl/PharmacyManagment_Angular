import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private auth:AuthService,public routr:Router) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  let isLoggedIn=this.auth.isLoggedIn.subscribe(data=>{
  //   if(data){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  //  })
  let isLoggedIn=this.auth.isLoggedIn;
   if(!isLoggedIn){
    this.routr.navigate(['/Login']);
   }
   return isLoggedIn;
  }

}
