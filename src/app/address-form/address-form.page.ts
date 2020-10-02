import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import {LoginPageService } from '../../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.page.html',
  styleUrls: ['./address-form.page.scss'],
})
export class AddressFormPage implements OnInit {

  constructor(private fb: FormBuilder, private apiService: LoginPageService, public toastController: ToastController, private router: Router) { }

  loginForm = this.fb.group({
    address_name:[''],
    address:[''],
    city:[''],
    state:[''],
    pincode:['']
  })

  isLoading=false;

  ngOnInit() {
  }

  
  async presentToast(x) {
    if(x!=200){
      x='Error Saving address'
    }
    else{
      x='Address Saved Successfully!'
    }
    const toast = await this.toastController.create({
      message: x,
      duration: 2000
    });
    toast.present();
  }

  login(){
    this.isLoading=true;
    this.apiService.postaddress(this.loginForm.value).subscribe(
      (res)=>{
        this.isLoading=false;
        this.presentToast(res.status);
        this.router.navigate(['/address'])
      },(err)=>{
        console.log(err);
        this.isLoading=false;
      }
    )
  }

}
