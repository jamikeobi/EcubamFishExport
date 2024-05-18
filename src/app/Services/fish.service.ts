import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FishService {
  private fishData = [
    { code: '001', commonName: 'African Butterflyfish', scientificName: 'Pantodon buchholzi', size: '3 inches', backpack: 5 },
    { code: '002', commonName: 'Albino Tiger Barb', scientificName: 'Puntigrus tetrazona', size: '2 inches', backpack: 10 },
    { code: '003', commonName: 'Angelfish', scientificName: 'Pterophyllum spp.', size: '6 inches', backpack: 5 },
    { code: '004', commonName: 'Archerfish', scientificName: 'Toxotes spp.', size: '8 inches', backpack: 10 },
    { code: '005', commonName: 'Asian Arowana', scientificName: 'Scleropages formosus', size: '24 inches', backpack: 1 },
    { code: '006', commonName: 'Betta Fish', scientificName: 'Betta splendens', size: '2.5 inches', backpack: 10 },
    { code: '007', commonName: 'Black Ghost Knifefish', scientificName: 'Apteronotus albifrons', size: '20 inches', backpack: 1 },
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

  private galleryData = [
    {id: 1, name: "Fishing Reels", description: "Fishing Reel Description", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/fishLogo.jpg"},
    {id: 2, name: "Fishing Rods", description: "Fishing Rods Description", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/4.png"},
    {id: 3, name: "Tools", description: "Tools Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/5.png"},
    {id: 4, name: "Baitrunner Fishing Reel", description: "Baitrunner Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/14.png"},
    {id: 5, name: "Celta Fishing Lures", description: "Celta Fishing Lures Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/8.png"},
    {id: 7, name: "Overhead Fishing Reel", description: "Overhead Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/7.png"},
    {id: 8, name: "Fishing Reels", description: "Fishing Reel Description", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/products/2.png"},
    {id: 9, name: "Fishing Rods", description: "Fishing Rods Description", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/4.png"},
    {id: 10, name: "Tools", description: "Tools Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/5.png"},
    {id: 11, name: "Shawa", description: "Baitrunner Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/14.png"},
    {id: 12, name: "Celta Fishing Lures", description: "Celta Fishing Lures Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/8.png"},
    {id: 13, name: "Overhead Fishing Reel", description: "Overhead Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/7.png"},
    {id: 14, name: "Fishing Reels", description: "Fishing Reel Description", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/products/2.png"},
    {id: 15, name: "Fishing Rods", description: "Fishing Rods Description", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/4.png"},
    {id: 16, name: "Tools", description: "Tools Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/5.png"},
    {id: 17, name: "Baitrunner Fishing Reel", description: "Baitrunner Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/14.png"},
    {id: 18, name: "Cella Fishing Lures", description: "Celta Fishing Lures Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/8.png"},
    {id: 19, name: "Overhead Fishing Reel", description: "Overhead Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/7.png"},
    {id: 20, name: "Titus", description: "Fishing Reel Description", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/products/2.png"},
    {id: 21, name: "Fishing Rods", description: "Fishing Rods Description", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/4.png"},
    {id: 22, name: "Tools", description: "Tools Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/5.png"},
    {id: 23, name: "Baitrunner Fishing Reel", description: "Baitrunner Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/14.png"},
    {id: 24, name: "Kpanla", description: "Celta Fishing Lures Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/8.png"},
    {id: 25, name: "Overhead Fishing Reel", description: "Overhead Fishing Reel Description", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/products/7.png"},
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
  };

  getGalleryData(): Observable<any[]> {
    return this.searchSubject.pipe(
      map((searchTerm: string) => {
        if (!searchTerm) {
          return this.galleryData;
        }
        searchTerm = searchTerm.toLowerCase();
        return this.galleryData.filter(gallery => gallery.name.toLowerCase().includes(searchTerm));
      })
    );
  }

  setSearchTerm(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }


}
