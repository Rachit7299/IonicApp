import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    name:[''],
    email:[''],
    mobile:['',[Validators.minLength(10), Validators.maxLength(10)]],
    city:[''],
    pswd:['']
  })

  ngOnInit() {
  }

  signUp(){
    console.log("Form Submitted");
    console.log(this.signUpForm.value);
  }
}
