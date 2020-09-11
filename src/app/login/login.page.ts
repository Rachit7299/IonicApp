import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    name:[''],
    pswd:['']
  })

  ngOnInit() {
    this.loginForm.reset();
  }

  login(){
    console.log("Form Submitted");
    console.log(this.loginForm.value);
  }
}
