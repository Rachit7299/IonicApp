import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { HomePageService} from '../../services/homepage.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;
  feturedCardList=[];
  caraouselList=[
    {"img":"../../assets/carousel2.jpg"},
    {"img":"../../assets/carousel3.jpg"},
    {"img":"../../assets/carousel5.jpg"}
  ]

  constructor(public photoService: PhotoService, private apiService: HomePageService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
    this.apiService.getfeaturedList().subscribe(
      (data)=>{
        this.feturedCardList=data;
      },(err)=>{
        console.log(err)
      });
  }

}