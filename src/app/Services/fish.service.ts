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
    {id: 1, name: "African Butterfly Fish", description: "The African butterfly fish (Pantodon buchholzi) is a fascinating freshwater species native to the slow-moving rivers and swamps of West and Central Africa", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/NewFishes/1.mp4"},
    {id: 3, name: "Albino Tiger Barb", description: "The Albino Tiger Barb is a captivating variant of the popular Tiger Barb, known for its striking appearance and lively behavior", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/3.mp4"},
    {id: 4, name: "Angel Fish", description: "Angelfish are a popular and visually striking type of freshwater fish known for their graceful appearance and distinct shape. They belong to the Cichlidae family", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/4.mp4"},
    {id: 5, name: "ArcherFish", description: "Archerfish are fascinating both for their unique hunting technique and their adaptability to different aquatic environments, making them a popular choice.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/4.mp4"},
    {id: 7, name: "Arowana", description: "Archerfish are fascinating both for their unique hunting technique and their adaptability to different aquatic environments, making them a popular choice.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/5.mp4"},
    {id: 8, name: "Asian Arowana", description: "Asian Arowana is not only a stunning aquatic specimen but also a culturally significant and environmentally vulnerable species.", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/NewFishes/6.mp4.mp4"},
    {id: 9, name: "Betta Fish", description: "Betta fish, also known as Siamese fighting fish, are popular freshwater aquarium fish known for their vibrant colors and flowing fins.", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/7.mp4"},
    {id: 10, name: "Black Molly", description: "Black Mollies are often bred selectively to enhance certain traits, such as coloration or fin shape, leading to a wide variety of color morphs and patterns.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/8.mp4"},
    {id: 11, name: "Black Skirt Tetra", description: "Black Skirt Tetras are popular among aquarists due to their hardy nature and striking appearance. They do well in groups, displaying schooling behavio.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/10.mp4"},
    {id: 12, name: "Blue Gourami", description: "Oval-shaped body, usually pale blue or blue-gray, with long fins. Oval-shaped body, usually pale blue or blue-gray, with long fins. Freshwater environments.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/11.mp4"},
    {id: 13, name: "Boeseman's Rainbow Fish", description: "Vibrant, with a striking gradient from bright blue at the front to a rich orange or yellow at the back. The males exhibit more intense coloration.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/12.mp4"},
    {id: 14, name: "Bolivan Ram", description: "The Bolivian Ram is a popular choice for freshwater aquariums due to its peaceful nature, striking appearance, and relatively easy care requirements,", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/NewFishes/13.mp4"},
    {id: 15, name: "African Butterfly Fish", description: "The African butterfly fish (Pantodon buchholzi) is a fascinating freshwater species native to the slow-moving rivers and swamps of West and Central Africa", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/NewFishes/14.mp4"},
    {id: 16, name: "Aba Knife Fish", description: "The Aba knife fish, scientifically known as Gymnarchus niloticus, is a unique and fascinating species of freshwater fish native to the rivers and lakes of West", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/video1.mp4"},
    {id: 17, name: "Albino Tiger Barb", description: "The Albino Tiger Barb is a captivating variant of the popular Tiger Barb, known for its striking appearance and lively behavior", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/video2.mp4"},
    {id: 18, name: "Angel Fish", description: "Angelfish are a popular and visually striking type of freshwater fish known for their graceful appearance and distinct shape. They belong to the Cichlidae family", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/video3.mp4.mp4"},
    {id: 19, name: "ArcherFish", description: "Archerfish are fascinating both for their unique hunting technique and their adaptability to different aquatic environments, making them a popular choice.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/video4.mp4"},
    {id: 20, name: "Arowana", description: "Archerfish are fascinating both for their unique hunting technique and their adaptability to different aquatic environments, making them a popular choice.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/video5.mp4"},
    {id: 21, name: "Asian Arowana", description: "Asian Arowana is not only a stunning aquatic specimen but also a culturally significant and environmentally vulnerable species.", stars: 4, price: 20, discountPrice: 30, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.43.56 PM (1).mp4"},
    {id: 22, name: "Betta Fish", description: "Betta fish, also known as Siamese fighting fish, are popular freshwater aquarium fish known for their vibrant colors and flowing fins.", stars: 3, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.43.56 PM.mp4"},
    {id: 23, name: "Black Molly", description: "Black Mollies are often bred selectively to enhance certain traits, such as coloration or fin shape, leading to a wide variety of color morphs and patterns.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.44.02 PM.mp4"},
    {id: 24, name: "Black Skirt Tetra", description: "Black Skirt Tetras are popular among aquarists due to their hardy nature and striking appearance. They do well in groups, displaying schooling behavio.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.44.03 PM (2).mp4"},
    {id: 25, name: "Blue Gourami", description: "Oval-shaped body, usually pale blue or blue-gray, with long fins. Oval-shaped body, usually pale blue or blue-gray, with long fins. Freshwater environments.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.44.03 PM (2).mp4"},
    {id: 26, name: "Boeseman's Rainbow Fish", description: "Vibrant, with a striking gradient from bright blue at the front to a rich orange or yellow at the back. The males exhibit more intense coloration.", stars: 4, price: 19, discountPrice: 29, imageURL: "../../assets/img/NewFishes/WhatsApp Video 2024-07-02 at 3.44.03 PM.mp4"}
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
