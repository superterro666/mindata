export interface IHero {
    name: string;
    description: string;
    image: File | string | boolean;
    gender: number | boolean;

}

export class Hero implements IHero { 
    name: string;
    description: string;
    image: File | string;
    gender: number | boolean;

    constructor(hero: Hero | null) {
        this.name = hero && hero.name ? hero.name : "";
        this.description = hero && hero.description ? hero.description : "";
        this.image = hero && hero.image ? hero.image : '';
        this.gender = hero && hero.gender ? hero.gender : false;
       }
}