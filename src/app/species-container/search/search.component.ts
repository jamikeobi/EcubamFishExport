import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { FishService } from 'src/app/Services/fish.service';
import { LagosFishService } from 'src/app/Services/lagos-fish.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  fishData$!: Observable<any[]>;
  fish$!: Observable<any[]>;

  constructor(private fishService: FishService, private LagosFishService: LagosFishService) { }

  ngOnInit(): void {
    this.fishData$ = this.fishService.getFishData();
    this.fish$ = this.LagosFishService.getFishData();
  }

  onSearch(): void {
    this.fishService.setSearchTerm(this.searchTerm);
    this.LagosFishService.setSearchTerm(this.searchTerm);
  }

  
}
