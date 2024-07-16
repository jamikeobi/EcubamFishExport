import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor(private http: HttpClient) { }

  logError(data: {statusCode: number, errorMessage: string, dateTime: Date}){
    this.http.post('https://ecubamsfishexport-default-rtdb.firebaseio.com/log.json', data).subscribe();
  }

  fetchError(){
    return this.http.get('https://ecubamsfishexport-default-rtdb.firebaseio.com/log.json').subscribe((data) => {
      console.log(data);
      
    })
  }
}
