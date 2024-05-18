import { Component } from '@angular/core';
import { Observable , of} from 'rxjs';
import { FishService } from '../Services/fish.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryData$!: Observable<any[]>; // Observable for gallery data
  items: any[] = []; // Array to hold items for pagination
  p: number = 1;  // Current page number
  itemsPerPage: number = 10;  // Number of items per page

  constructor(private fishService: FishService) {}

  ngOnInit(): void {
    // Subscribe to the gallery data observable
    this.galleryData$ = this.fishService.getGalleryData();
    this.galleryData$.subscribe(items => this.items = items);
  }

  // Method to handle search input
  filterItems(searchTerm: string): void {
    this.fishService.setSearchTerm(searchTerm);
  }
}
