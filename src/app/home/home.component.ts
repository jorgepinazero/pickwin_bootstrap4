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
  cash1 = '../../assets/img/cash1-50.png';
  coin1 = '../../assets/img/pickcoin1-50.png';
  basketball = '../../assets/img/BasketballBall-50.png';
  futbol = '../../assets/img/FutbolBall-50.png';
  americano = '../../assets/img/AmericanoBall-50.png';
  hockey = '../../assets/img/Hockey.png';

  constructor() { }

  ngOnInit() {
  }

}
