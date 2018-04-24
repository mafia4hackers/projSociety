import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from "./login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
  
})
export class LoginComponent implements OnInit {


  cookieValue = '';
  
  loginForm:FormGroup;

  constructor(formBuilder:FormBuilder,private cookieService: CookieService,private loginService:LoginService) { 
     this.loginForm = formBuilder.group({
      flatNo:new FormControl("",[Validators.minLength(3),Validators.required]),
      signInPassword:new FormControl("",[Validators.minLength(8),Validators.required]),
      rememberMe:new FormControl("")

     })

  }

  ngOnInit() {
    
    
  }
  rememberMeCheck(){
    this.cookieService.set('Test', 'value set' );
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieValue);
  }


  loginform(data){
    
    if(data.value.rememberMe==true){
      this.rememberMeCheck();
    }
    this.loginService.loginConnect(data).subscribe(result=>{
      console.log("Data saved" + result);
      
    },err=>{
      console.log(err)
    })
  }


}
