import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;

  @ViewChild('contactForm') contactForm!: NgForm;
  http: HttpClient = inject(HttpClient);
  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    this.submitted = true;
    if (contactForm.valid) {
    const header = new HttpHeaders({'EcubamsHeader':'Contact Form'});
    const currentData = new Date().getFullYear();
    const ContactData = {
      fname: this.contactForm.value.fname,
      lname: this.contactForm.value.lname,
      email: this.contactForm.value.email,
      companyradio: this.contactForm.value.companyradio,
      contactType: this.contactForm.value.contactType,
      companys: this.contactForm.value.companys,
      country: this.contactForm.value.country,
      message: this.contactForm.value.message,
      date: currentData
    };
    this.http.post<{name: string}>('https://ecubamsfishexport-default-rtdb.firebaseio.com/contactForm.json', ContactData, {headers: header}).subscribe((response) => {
      console.log(response);
    this.contactForm.reset();
    this.submitted = false;
    });
    }
  }
}
