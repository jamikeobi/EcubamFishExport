import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ContactForm } from '../Model/form';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private apiUrl = 'https://ecubamsfishexport-default-rtdb.firebaseio.com/contactForm.json';


  constructor(private http: HttpClient) { }

  getFormData(): Observable<any>{
    return this.http.get<{[key: string]: ContactForm}>(this.apiUrl).pipe(map((response) => {
      let forms = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          forms.push({...response[key], id: key})
        }
      }

      return forms;
    }));
  };

}
