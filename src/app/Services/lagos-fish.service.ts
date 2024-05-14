import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LagosFishService {

  private fishData = [
    { code: '001', commonName: 'Arowana', scientificName: 'Ostoglossymm Bicirhosum	', size: '50', backpack: 35 },
    { code: '002', commonName: 'Aba Knife Fish	', scientificName: 'Gymnanrus Niloticus	', size: '2 inches', backpack: 10 },
    { code: '003', commonName: 'Aquatic Clawed Frog	', scientificName: 'Xenopus Laevis', size: '6 inches', backpack: 5 },
    { code: '004', commonName: 'Archerfish', scientificName: 'Toxotes spp.', size: '8 inches', backpack: 10 },
    { code: '005', commonName: 'African Tree Frogs', scientificName: 'Brycinus Longipinnis	', size: '24 inches', backpack: 1 },
    { code: '006', commonName: 'Aphyeseimion Killi	', scientificName: 'Aphyeseimion (Various)	', size: '2.5 inches', backpack: 10 },
    { code: '007', commonName: 'Aluminum Cat', scientificName: 'Chryciltus Brachynema	', size: '20 inches', backpack: 1 },
    { code: '008', commonName: 'Black Molly', scientificName: 'Poecilia sphenops', size: '3 inches', backpack: 20 },
    { code: '009', commonName: 'Black Skirt Tetra', scientificName: 'Gymnocorymbus ternetzi', size: '2 inches', backpack: 15 },
    { code: '010', commonName: 'Black Tetra', scientificName: 'Gymnocorymbus ternetzi', size: '2 inches', backpack: 20 },
    { code: '011', commonName: 'Blue Gourami', scientificName: 'Trichogaster trichopterus', size: '4 inches', backpack: 5 },
    { code: '012', commonName: "Boeseman's Rainbowfish", scientificName: 'Melanotaenia boesemani', size: '3 inches', backpack: 10 },
    { code: '013', commonName: 'Bolivian Ram', scientificName: 'Mikrogeophagus altispinosus', size: '3 inches', backpack: 5 },
    { code: '014', commonName: 'Bristlenose Pleco', scientificName: 'Ancistrus spp.', size: '4 inches', backpack: 10 },
    { code: '015', commonName: 'Cardinal Tetra', scientificName: 'Paracheirodon axelrodi', size: '1.5 inches', backpack: 20 },
    { code: '016', commonName: 'Celestial Pearl Danio', scientificName: 'Danio margaritatus', size: '0.75 inches', backpack: 20 },
    { code: '017', commonName: 'Clown Loach', scientificName: 'Chromobotia macracanthus', size: '12 inches', backpack: 1 },
    { code: '018', commonName: 'Congo Tetra', scientificName: 'Phenacogrammus interruptus', size: '3 inches', backpack: 10 },
    { code: '019', commonName: 'Corydoras Catfish', scientificName: 'Corydoras spp.', size: '2.5 inches', backpack: 15 },
    { code: '020', commonName: 'Dwarf Gourami', scientificName: 'Trichogaster lalius', size: '2 inches', backpack: 10 },
    // Continue adding more fish species up to 100
    { code: '021', commonName: 'Electric Blue Ram', scientificName: 'Mikrogeophagus ramirezi', size: '2 inches', backpack: 5 },
    { code: '022', commonName: 'Electric Yellow Cichlid', scientificName: 'Labidochromis caeruleus', size: '4 inches', backpack: 5 },
    { code: '023', commonName: 'Endler\'s Livebearer', scientificName: 'Poecilia wingei', size: '1.5 inches', backpack: 20 },
    { code: '024', commonName: 'Fancy Guppy', scientificName: 'Poecilia reticulata', size: '2 inches', backpack: 20 },
    { code: '025', commonName: 'Firemouth Cichlid', scientificName: 'Thorichthys meeki', size: '6 inches', backpack: 5 },
    { code: '026', commonName: 'Flame Tetra', scientificName: 'Hyphessobrycon flammeus', size: '4 inches', backpack: 6}
  ];

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() { }

  getFishData(): Observable<any[]> {
    return this.searchSubject.pipe(
      map((searchTerm: string) => {
        if (!searchTerm) {
          return this.fishData;
        }
        searchTerm = searchTerm.toLowerCase();
        return this.fishData.filter(fish => fish.commonName.toLowerCase().includes(searchTerm));
      })
    );
  }

  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }
}
