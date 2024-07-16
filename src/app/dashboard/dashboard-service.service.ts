import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ContactForm } from '../Model/form';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private apiUrl = 'https://ecubamsfishexport-default-rtdb.firebaseio.com/contactForm.json';


  constructor(private http: HttpClient, private LoggingService: LoggingServiceService) { }

  getFormData(): Observable<any>{
    return this.http.get<{[key: string]: ContactForm}>(this.apiUrl).pipe(map((response) => {
      let forms = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          forms.push({...response[key], id: key})
        }
      }

      return forms;
    }), catchError((error: HttpErrorResponse) => {
      console.log('Full error:', error);

      const statusCode = error.status;
      const errorMessage = error.message;
      const errorObj = {statusCode , errorMessage , dateTime: new Date};
      console.log('Extracted error: ',errorObj);
      
      this.LoggingService.logError(errorObj)
      return throwError(() => error);
      
    }));
  };

}
