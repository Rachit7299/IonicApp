import { Component } from '@angular/core';
import { LoginPageService } from '../../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private apiService: LoginPageService, private router: Router){}

  signedIn:boolean;
  user;

  ngOnInit(){
    let t = localStorage.getItem('token');
    if(t){
      this.apiService.getUserDetails().subscribe(
        (response)=>{
          this.signedIn=true;
          this.user=response;
        })
    }
    else{
      this.signedIn=false;
    }
  }

  logout(){
    this.apiService.logoutUser();
  }

  delete(){
    this.apiService.deleteUser().subscribe(
      (res)=>{
        this.apiService.logoutUser();
      },(err)=>{
        console.log(err);
      }
    )
  }
}
