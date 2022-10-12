
import { Hero } from '../models/hero.model';


export let heros: Hero[] = [];



export function nameExist(name: string): boolean { 
    const heros = getLocalStorage();
   
    return heros.filter((h: Hero) => h.name.toLocaleLowerCase() == name.toLocaleLowerCase()).length > 0 ? true : false;

}


export const setLocalStorage = (value: Hero[]) => {
    localStorage.setItem('heros', JSON.stringify(value));
}


export const setLocalStorageHero = (hero: Hero) => {
    const heros = !nameExist(hero.name) ? getLocalStorage() : false;
    if (!heros) return;
    heros.push(hero)
    localStorage.setItem('heros', JSON.stringify(heros));
}


export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('heros') || "[]");
 }


export const getHero = (name: string) => {
    return  new Hero(JSON.parse(localStorage.getItem('heros') || "[]").filter((hero: Hero) => hero.name == name)[0]);

}


export const deleteHero = (name: string) => { 
    const heros = JSON.parse(localStorage.getItem('heros') || "[]").filter((hero: Hero) => hero.name != name);
    localStorage.setItem('heros', JSON.stringify(heros));
    return heros;
}

export const updateHero = (hero: Hero) => { 
    deleteHero(hero.name);
    setLocalStorageHero(hero)
}

export const localhostIsNoEmpty = () => {
    return localStorage.getItem('heros') == (undefined || null) ? false : true;
}

