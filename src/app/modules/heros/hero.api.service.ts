import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from './models/hero.model';
import { heros, deleteHero, setLocalStorage, getLocalStorage, setLocalStorageHero, localhostIsNoEmpty } from './store/hero.store';

@Injectable({
    providedIn: 'root'
})

export class HeroApiService {

    subjectHeros: BehaviorSubject<Hero[]> = new BehaviorSubject(heros);
    $event = this.subjectHeros.asObservable();
    delete!: Observable<any>;


    constructor(private http: HttpClient) { }

    saveHero(hero: Hero): Promise<Hero | boolean> {
        return new Promise<Hero>((resolve) => {
            setLocalStorageHero(hero);
            resolve(hero);
        });
    }

    editHero(hero: Hero, name: string): Promise<Hero | boolean> {
        return new Promise<Hero | boolean>((resolve, reject) => {
            if (this.updateHero(hero, name)) {
                resolve(hero);
            }
            resolve(false);
        });
    }



    getHeros(): Observable<Hero[]> {
         
        if (!localhostIsNoEmpty()) {
            return this.http.get<Hero[]>(`${environment.url}/heros`).pipe(tap(h => setLocalStorage(h)  )) 
        } else {
            return this.getHerosFromLocalStorage();
        }
        
     
    }

    getHerosFromLocalStorage(): Observable<Hero[]> { 
        return new Observable((obs) => {
            obs.next(getLocalStorage()); 
        });
    }



    getHero(abc: string): Observable<Hero[]> {
        return new Observable((obs => {
            const heros: Hero[] = [];
            if (this.existHeros()) {
                getLocalStorage().forEach((hero: Hero) => {
                    const index = this.findHero(hero.name, abc)
                    if (index > 0) {
                        setLocalStorageHero(new Hero(heros[index]))
                    }
                });
                obs.next(heros);
                obs.complete();
            }
        })) 
    }

    getHeroByName(abc: string): Observable<Hero> {
        return new Observable((obs => {
            getLocalStorage().forEach((hero: Hero) => {
                hero.name === abc ? obs.next(hero) : null
            });
            obs.complete();
        }));
    }

    deleteHero(name: string): Observable<any> {
        return new Observable((obs) => { 
            const heroes: Hero[] =  deleteHero(name);
            obs.next(heroes);
            obs.complete();
        })
    }

    private existHeros(): boolean {
        return getLocalStorage() && getLocalStorage.length > 0 ? true : false;
    }


   

    private updateHero(hero: Hero, name: string): boolean {
        if (hero instanceof Hero) {
            let heros = getLocalStorage(); 
            let index = heros.findIndex((h: Hero) => h.name === name);
            heros[index] = hero;
            setLocalStorage(heros);
            return true;
        }
        return false;

    }


    private findHero(name: string, abc: string): number {
        return name.toLowerCase().indexOf(abc);
    }


}