import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LagosFishService {

  private fishData = [
    { SN: "1", Name_English: "Arowana (Small)", Name_Scientific: "Heteroties Niloticus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "2", Name_English: "Arowana (Medium)", Name_Scientific: "Heteroties Niloticus", Qty_per_Box: 80, Stock_in_Box_Lots: 4 },
    { SN: "3", Name_English: "Aba Knife Fish", Name_Scientific: "Gymnanrus Niloticus", Qty_per_Box: 300, Stock_in_Box_Lots: 5 },
    { SN: "4", Name_English: "African Phago", Name_Scientific: "Phago Muculatus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "5", Name_English: "African Shark", Name_Scientific: "Labeo Senegalensis", Qty_per_Box: 30, Stock_in_Box_Lots: 5 },
    { SN: "6", Name_English: "Aquatic Clawed Frog", Name_Scientific: "Xenopus Laevis", Qty_per_Box: 400, Stock_in_Box_Lots: 7 },
    { SN: "7", Name_English: "African Tree Frogs", Name_Scientific: "Hyperolius Sp.", Qty_per_Box: 400, Stock_in_Box_Lots: 6 },
    { SN: "8", Name_English: "Alestes Tetra", Name_Scientific: "Brycinus Longipinnis", Qty_per_Box: 130, Stock_in_Box_Lots: 5 },
    { SN: "9", Name_English: "Aphyeseimion Killi", Name_Scientific: "Aphyeseimion (Various)", Qty_per_Box: 400, Stock_in_Box_Lots: 4 },
    { SN: "10", Name_English: "Aluminum Cat", Name_Scientific: "Chryciltus Brachynema", Qty_per_Box: 130, Stock_in_Box_Lots: 6 },
    { SN: "11", Name_English: "Atya Shrimps (Small)", Name_Scientific: "Atya Gabonensis", Qty_per_Box: 200, Stock_in_Box_Lots: 7 },
    { SN: "12", Name_English: "Atya Shrimps (Medium)", Name_Scientific: "Atya Gabonensis", Qty_per_Box: 100, Stock_in_Box_Lots: 4 },
    { SN: "13", Name_English: "Atya Shrimps (Large)", Name_Scientific: "Atya Gabonensis", Qty_per_Box: 40, Stock_in_Box_Lots: 4 },
    { SN: "14", Name_English: "Butterfly (Small)", Name_Scientific: "Pantondon Bucholzi", Qty_per_Box: 150, Stock_in_Box_Lots: 8 },
    { SN: "15", Name_English: "Blue Fish", Name_Scientific: "Aplocheilicthys Myersi", Qty_per_Box: 300, Stock_in_Box_Lots: 3 },
    { SN: "16", Name_English: "Blood Fish", Name_Scientific: "Phractolaemus Ansorgi", Qty_per_Box: 50, Stock_in_Box_Lots: 3 },
    { SN: "17", Name_English: "Blue Diamond Tetra", Name_Scientific: "Alestopetersius Smykalai", Qty_per_Box: 150, Stock_in_Box_Lots: 4 },
    { SN: "18", Name_English: "Bitaeniatum", Name_Scientific: "Aphyeseimion Bitaeniatum", Qty_per_Box: 400, Stock_in_Box_Lots: 3 },
    { SN: "19", Name_English: "Brachy", Name_Scientific: "Synodontis Batensoda", Qty_per_Box: 50, Stock_in_Box_Lots: 3 },
    { SN: "20", Name_English: "Bush Fish", Name_Scientific: "Ctenopoma Maculatus", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "21", Name_English: "Bagrus (Shovel Head)", Name_Scientific: "Bagrus Ubagensis", Qty_per_Box: 50, Stock_in_Box_Lots: 4 },
    { SN: "22", Name_English: "Barbs", Name_Scientific: "Barboides Graciis", Qty_per_Box: 300, Stock_in_Box_Lots: 5 },
    { SN: "23", Name_English: "Blue Panchax", Name_Scientific: "Aplocheilus Panchax", Qty_per_Box: 300, Stock_in_Box_Lots: 4 },
    { SN: "24", Name_English: "Congo Tetra", Name_Scientific: "Phenacogramus Interutus", Qty_per_Box: 130, Stock_in_Box_Lots: 4 },
    { SN: "25", Name_English: "Clarias Cat", Name_Scientific: "Clarias Angolensis", Qty_per_Box: 50, Stock_in_Box_Lots: 4 },
    { SN: "26", Name_English: "Debawie Cat", Name_Scientific: "Eutropiellus Debawie", Qty_per_Box: 150, Stock_in_Box_Lots: 7 },
    { SN: "27", Name_English: "Dolphin", Name_Scientific: "Mormyrop Hasselquistii", Qty_per_Box: 24, Stock_in_Box_Lots: 5 },
    { SN: "28", Name_English: "Dwarff Cat", Name_Scientific: "Microsynodontis Polli", Qty_per_Box: 500, Stock_in_Box_Lots: 2 },
    { SN: "29", Name_English: "Deltahens", Name_Scientific: "Fundolupanchax Deltahens", Qty_per_Box: 400, Stock_in_Box_Lots: 4 },
    { SN: "30", Name_English: "Eel Cat", Name_Scientific: "Chanallabes Apus", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "31", Name_English: "Electric Cat (Small)", Name_Scientific: "Malapterurus Electricus", Qty_per_Box: 150, Stock_in_Box_Lots: 4 },
    { SN: "32", Name_English: "Electric Cat (Medium)", Name_Scientific: "Malapterurus Electricus", Qty_per_Box: 100, Stock_in_Box_Lots: 4 },
    { SN: "33", Name_English: "Endlicheri Polypterus", Name_Scientific: "Polypterus Endlicheri", Qty_per_Box: 30, Stock_in_Box_Lots: 6 },
    { SN: "34", Name_English: "Freshwater Shrimps", Name_Scientific: "Gammarus Pulex", Qty_per_Box: 130, Stock_in_Box_Lots: 3 },
    { SN: "35", Name_English: "Glass Cat", Name_Scientific: "Parailia Pellucida", Qty_per_Box: 130, Stock_in_Box_Lots: 5 },
    { SN: "36", Name_English: "Goby", Name_Scientific: "Gobiidae Sp.", Qty_per_Box: 150, Stock_in_Box_Lots: 3 },
    { SN: "37", Name_English: "Grass Cutter", Name_Scientific: "Schilbe Mystus", Qty_per_Box: 120, Stock_in_Box_Lots: 4 },
    { SN: "38", Name_English: "Giraffe Nose", Name_Scientific: "Auchenoglanis Ocedent", Qty_per_Box: 50, Stock_in_Box_Lots: 2 },
    { SN: "39", Name_English: "Guppy", Name_Scientific: "Poecilia Reticulata", Qty_per_Box: 300, Stock_in_Box_Lots: 3 },
    { SN: "40", Name_English: "Jewel Fish", Name_Scientific: "Hemicheomis Binaculatus", Qty_per_Box: 120, Stock_in_Box_Lots: 3 },
    { SN: "41", Name_English: "Knife Fish", Name_Scientific: "Xenomystus Nigri", Qty_per_Box: 140, Stock_in_Box_Lots: 9 },
    { SN: "42", Name_English: "Kribensis (Red Belly)", Name_Scientific: "Pelvicachromis Pulcher", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "43", Name_English: "Kribensis", Name_Scientific: "Pelvicachromis Elongatus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "44", Name_English: "Kribensis", Name_Scientific: "Pelvicachromis Taeniatus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "45", Name_English: "Labeo", Name_Scientific: "Labeo Forskal", Qty_per_Box: 140, Stock_in_Box_Lots: 5 },
    { SN: "46", Name_English: "Lung Fish", Name_Scientific: "Protopterus Sp.", Qty_per_Box: 10, Stock_in_Box_Lots: 5 },
    { SN: "47", Name_English: "Ladige'S Pygmy", Name_Scientific: "Alestopetersius Caudalis", Qty_per_Box: 140, Stock_in_Box_Lots: 5 },
    { SN: "48", Name_English: "Mormyrus Tapirus", Name_Scientific: "Mormyrus Tapirus", Qty_per_Box: 24, Stock_in_Box_Lots: 5 },
    { SN: "49", Name_English: "Monosynodontis", Name_Scientific: "Synodontis Membraneous", Qty_per_Box: 24, Stock_in_Box_Lots: 5 },
    { SN: "50", Name_English: "Mormyrops Angulicinis", Name_Scientific: "Mormyrops Angulicinis", Qty_per_Box: 24, Stock_in_Box_Lots: 5 },
    { SN: "51", Name_English: "Nanochromis", Name_Scientific: "Nanochromis Nudiceps", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "52", Name_English: "Nanochromis", Name_Scientific: "Nanochromis Parilus", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "53", Name_English: "Nanochromis", Name_Scientific: "Nanochromis Transvestitus", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "54", Name_English: "Notobranchus", Name_Scientific: "Notobranchus Rubripinnis", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "55", Name_English: "Notobranchus", Name_Scientific: "Notobranchus Korthause", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "56", Name_English: "Notobranchus", Name_Scientific: "Notobranchus Orthonnon", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "57", Name_English: "Nanochromis", Name_Scientific: "Nanochromis Minutus", Qty_per_Box: 200, Stock_in_Box_Lots: 5 },
    { SN: "58", Name_English: "Ornamental Spiny Eels", Name_Scientific: "Mastacembelus Sp.", Qty_per_Box: 30, Stock_in_Box_Lots: 5 },
    { SN: "59", Name_English: "Ornamental Spiny Eels", Name_Scientific: "Mastacembelus Armatus", Qty_per_Box: 30, Stock_in_Box_Lots: 5 },
    { SN: "60", Name_English: "Ornamental Shrimps", Name_Scientific: "Caridina Japonica", Qty_per_Box: 30, Stock_in_Box_Lots: 5 },
    { SN: "61", Name_English: "Pollimyrus", Name_Scientific: "Pollimyrus Isidori", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "62", Name_English: "Plecostomus", Name_Scientific: "Plecostomus (Various)", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "63", Name_English: "Polypterus", Name_Scientific: "Polypterus Palmas", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "64", Name_English: "Polypterus", Name_Scientific: "Polypterus Senegalesis", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "65", Name_English: "Polypterus", Name_Scientific: "Polypterus Weeksii", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "66", Name_English: "Polypterus", Name_Scientific: "Polypterus Ornatipinnis", Qty_per_Box: 50, Stock_in_Box_Lots: 5 },
    { SN: "67", Name_English: "Procatopus", Name_Scientific: "Procatopus Abberrans", Qty_per_Box: 300, Stock_in_Box_Lots: 5 },
    { SN: "68", Name_English: "Procatopus", Name_Scientific: "Procatopus Brevis", Qty_per_Box: 300, Stock_in_Box_Lots: 5 },
    { SN: "69", Name_English: "Polypterus", Name_Scientific: "Polypterus Delhezi", Qty_per_Box: 30, Stock_in_Box_Lots: 5 },
    { SN: "70", Name_English: "Senegal Aphyosemion", Name_Scientific: "Aphyosemion Ogowe", Qty_per_Box: 300, Stock_in_Box_Lots: 5 },
    { SN: "71", Name_English: "Shark (Large)", Name_Scientific: "Arius Parcilis", Qty_per_Box: 50, Stock_in_Box_Lots: 3 },
    { SN: "72", Name_English: "Shark (Medium)", Name_Scientific: "Arius Parcilis", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "73", Name_English: "Shark (Small)", Name_Scientific: "Arius Parcilis", Qty_per_Box: 150, Stock_in_Box_Lots: 3 },
    { SN: "74", Name_English: "Syndontis Decorus", Name_Scientific: "Syndontis Decorus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "75", Name_English: "Spotted", Name_Scientific: "Clarias Macrorynchus", Qty_per_Box: 150, Stock_in_Box_Lots: 4 },
    { SN: "76", Name_English: "Syndontis", Name_Scientific: "Syndontis Clarias", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "77", Name_English: "Syndontis", Name_Scientific: "Syndontis Membraneous", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "78", Name_English: "Syndontis", Name_Scientific: "Syndontis Angelica", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "79", Name_English: "Syndontis", Name_Scientific: "Syndontis Schall", Qty_per_Box: 100, Stock_in_Box_Lots: 3 },
    { SN: "80", Name_English: "Spiny Eel", Name_Scientific: "Mastacembelus Moori", Qty_per_Box: 30, Stock_in_Box_Lots: 3 },
    { SN: "81", Name_English: "Steatocranus", Name_Scientific: "Steatocranus Casuarius", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "82", Name_English: "Tilapia", Name_Scientific: "Tilapia (Various)", Qty_per_Box: 30, Stock_in_Box_Lots: 3 },
    { SN: "83", Name_English: "West African Red Cichlid", Name_Scientific: "Hemichromis Lifalili", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "84", Name_English: "West African Golden Cichlid", Name_Scientific: "Hemichromis Exsul", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "85", Name_English: "West African Red Cichlid", Name_Scientific: "Hemichromis Sp.", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "86", Name_English: "West African Golden Cichlid", Name_Scientific: "Hemichromis Exsul", Qty_per_Box: 100, Stock_in_Box_Lots: 5 },
    { SN: "87", Name_English: "Yellow Belly Cichlid", Name_Scientific: "Pseudotropheus Elongatus", Qty_per_Box: 100, Stock_in_Box_Lots: 5 }
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
        return this.fishData.filter(fish => fish.Name_English.toLowerCase().includes(searchTerm));
      })
    );
  }

  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }
}
