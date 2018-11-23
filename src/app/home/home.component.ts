import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerIzq = '../../assets/img/banner-izq.png';
  bannerCen = '../../assets/img/banner-cen.png';
  bannerDer = '../../assets/img/banner-der.png';

  constructor() { }

  ngOnInit() {
  }

}
