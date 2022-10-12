import { Injectable } from '@angular/core';
import { getLocalStorage } from 'src/app/modules/heros/store/hero.store';
import { Hero } from '../../modules/heros/models/hero.model';
@Injectable({
  providedIn: 'root'
})
export class HeroFilterService {

    constructor() { }
    
    search(query: string): any[] {
        const heros: Hero[] = getLocalStorage();
        const a = (!query) ? heros : heros.filter(h => h.name.toLowerCase().includes(query.trim().toLowerCase()));
        return a;
       
       
    }
}
