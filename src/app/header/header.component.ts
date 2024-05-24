import { Component , AfterViewInit} from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngAfterViewInit(){

  $(document).ready(() => {
    // Select the hamburger icon and add a click event listener
    $('.hamburger-icon').click(() => {
      // Toggle the 'active' class for the hamburger icon
      $('.hamburger-icon').toggleClass('active');
  
      // Toggle the 'active' class for the navbar
      $('.navbar-nav').toggleClass('active');
    });
  });
}

}
