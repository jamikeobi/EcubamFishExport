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
  items: any[] = []; // Array to hold items for pagination
  // collection: any[];
  itemsPerPage: number = 20;
  p: number = 1;

  constructor(private LagosFishService: LagosFishService) { }

  ngOnInit(): void {
    this.fishData$ = this.LagosFishService.getFishData(); // This will get filtered data from the service
  }
  
}
