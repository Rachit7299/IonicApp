import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import {SignUpPageService } from '../../services/signuppage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: FormBuilder, private apiService: SignUpPageService, public toastController: ToastController) { }

  signUpForm = this.fb.group({
    name:[''],
    email:[''],
    mobile:['',[Validators.minLength(10), Validators.maxLength(10)]],
    city:[''],
    pswd:['']
  })

  ngOnInit() {
  }

  async presentToast(x) {
    if(x=='409'){
      x='User Already Exist!'
    }
    const toast = await this.toastController.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }

  signUp(){
    this.apiService.registeruser(this.signUpForm.value).subscribe(
      (data)=>{
        this.presentToast(data.status);
    },(err)=>{
      this.presentToast(err.status);
    })
  }
}
