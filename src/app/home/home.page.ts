import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cardList=[
    { "title":"Title1", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/women.jpg')"},
    { "title":"Title2", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/mens.jpg')"},
    { "title":"Title3", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/formal.jpg')"},
    { "title":"Title4", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/sportswear.jpg')"},
    { "title":"Title5", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/winterwear.jpg')"},
    { "title":"Title6", "color_gradient":"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('./assets/footwear.jpg')"},
  ]

  constructor(private fb: FormBuilder) { }

  searchForm= this.fb.group({
    search:['']
  })

  ngOnInit() {
  }

  Search(){
    console.log(this.searchForm.value);
  }

}
