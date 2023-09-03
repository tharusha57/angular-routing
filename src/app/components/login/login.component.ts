import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthServiceService , private router : Router){}

  
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/admin'])
    }
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin'])
        } ,
        (error : Error) => {
          alert(error.message);
        }
      )
    }
  }

}
