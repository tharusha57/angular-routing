import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router : Router) { }

  setToken(token : string) {
    localStorage.setItem('token' , token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']) //Check here []
  }

  login({email, password} : any) : Observable<any> {
    if(email === 'admin@gmail.com' && password === 'admin123'){
      this.setToken('qwesdalknjqwne1231431knsakjdnkj234324234')
      return of({name : 'Tharusha' , email : email});
    }
    return throwError(new Error('Failed to login'))
  }

}
