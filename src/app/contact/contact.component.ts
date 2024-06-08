import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;
  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    this.submitted = true;
    if (contactForm.valid) {
      this.contactService.submitContact(contactForm.value).subscribe(response => {
        console.log('Contact form submitted successfully', response);
      }, error => {
        console.error('Error submitting contact form', error);
      });
    }
  }
}
