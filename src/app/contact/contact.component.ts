import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  onSubmit(form: any) {
    if (form.valid) {
      this.formData = form.value;
      console.log('Form Submitted!', this.formData);
      // Store form data (e.g., in local storage or send it to a server)
      localStorage.setItem('formData', JSON.stringify(this.formData));
    } else {
      console.log('Form is not valid');
      // You can add more specific validation messages if needed
    }
  }

  getStoredData() {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
      console.log('Retrieved Data:', this.formData);
    } else {
      console.log('No stored data found');
    }
  }
}
