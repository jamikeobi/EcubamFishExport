import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost/contact_form/submit_contact.php';

  constructor(private http: HttpClient) { }

  submitContact(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
