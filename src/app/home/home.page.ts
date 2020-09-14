import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { HomePageService} from '../../services/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categoryCardList=[];
  feturedCardList=[];

  constructor(private fb: FormBuilder, private apiService: HomePageService) { }

  searchForm= this.fb.group({
    search:['']
  })

  ngOnInit() {
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
  }

  Search(){
    console.log(this.searchForm.value);
  }

}
