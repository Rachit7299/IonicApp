import { Component, OnInit } from '@angular/core';
import { LoginPageService } from '../../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(private apiService: LoginPageService, private router: Router) { }

  isLoading;
  noItem;
  signedIn:boolean;
  addresses=[];

  ngOnInit() {
    this.isLoading=true;
    this.noItem=false;
    let t = localStorage.getItem('token');
    if(t){
      this.signedIn=true;
      this.apiService.getUserDetails().subscribe(
        (user)=>{
          this.addresses=user.my_address;
          if(this.addresses.length<1){
            this.noItem=true;
          }
          this.isLoading=false;
        },(err)=>{
          this.isLoading=false;
          console.log(err);
        }
      )
    }
    else{
      this.signedIn=false;
      this.isLoading=false;
    }
  }

}
