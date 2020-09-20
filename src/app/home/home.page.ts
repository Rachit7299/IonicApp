import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { HomePageService} from '../../services/homepage.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categoryCardList=[];
  feturedCardList=[];
  topPicksList=[];
  loggedIn:boolean;

  constructor(private fb: FormBuilder, private apiService: HomePageService) { }

  searchForm= this.fb.group({
    search:['']
  })

  ngOnInit() {
    let t = localStorage.getItem('token');
    if(t){
      this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
    }
    AOS.init();
    this.apiService.getcategories().subscribe(
      (data)=>{
        this.categoryCardList=data;        
      },(err)=>{
        console.log(err)
      });
      this.apiService.getfeaturedList().subscribe(
        (data)=>{
          this.feturedCardList=data;
        },(err)=>{
          console.log(err)
        });
      this.apiService.gettopPicks().subscribe(
          (data)=>{
            this.topPicksList=data;
          },(err)=>{
            console.log(err)
          });
  }

  Search(){
    console.log(this.searchForm.value);
  }

}
