import { Component, OnInit } from '@angular/core';
import { UserService, TokenPayload } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: '',
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private auth:UserService,private router:Router) { }
  onSubmit(form: NgForm) {
    
    this.auth.login(form.value).subscribe(
      res => {
        console.log(res);
        this.auth.admin=res.admin;
        this.auth.userId=res.id;
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        
        this.router.navigateByUrl('/');
       

      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
  ngOnInit() {
    
    
  }

}
