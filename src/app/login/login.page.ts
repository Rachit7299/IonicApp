import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import {LoginPageService } from '../../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private apiService: LoginPageService, public toastController: ToastController, private router: Router) { }

  loginForm = this.fb.group({
    username:[''],
    pswd:['']
  })

  isLoading=false;

  async presentToast(x) {
    if(x=='403'){
      x='Invalid Credentials'
    }
    if(x=='401'){
      x='User Not Found'
    }
    else{
      x='Login Successfull'
    }
    const toast = await this.toastController.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.loginForm.reset();
  }

  login(){
    this.isLoading=true;
    this.apiService.loginUser(this.loginForm.value).subscribe(
      (data)=>{
        this.isLoading=false;
        this.presentToast(data.status);
        localStorage.setItem('token',data.token);
        localStorage.setItem('userId',data._id);
        this.router.navigate(['']);
        window.location.replace('/tabs/home');
    },(err)=>{
      this.presentToast(err.status);
      this.isLoading=false;
    })
  }
}
