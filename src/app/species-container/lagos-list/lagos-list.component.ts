import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LagosFishService } from 'src/app/Services/lagos-fish.service';
@Component({
  selector: 'app-lagos-list',
  templateUrl: './lagos-list.component.html',
  styleUrls: ['./lagos-list.component.css']
})
export class LagosListComponent {
  searchText: string = '';
  fishData$!: Observable<any[]>;

  constructor(private LagosFishService: LagosFishService) { }

  ngOnInit(): void {
    this.fishData$ = this.LagosFishService.getFishData(); // This will get filtered data from the service
  }
  
}
