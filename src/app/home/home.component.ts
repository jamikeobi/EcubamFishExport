import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit() {
    $('.fis-main-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
  }
}
