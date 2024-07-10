import { Component } from '@angular/core';
import { ContactForm } from '../Model/form';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: ContactForm[] = [];

  constructor(private formService: DashboardServiceService){}

  ngOnInit(){
    this.getFormData();
  }

  getFormData(){
    this.formService.getFormData().subscribe((data) => {
      this.data = data;
      console.log(data)
    })
  };

}
