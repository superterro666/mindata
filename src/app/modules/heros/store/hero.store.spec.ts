import { deleteHero, nameExist, setLocalStorage, setLocalStorageHero, getLocalStorage, getHero, localhostIsNoEmpty } from "./hero.store";
import { Hero } from '../models/hero.model';

const heros: Hero[] = [
    {
        name: "Superman",
        description: "superheroe",
        image: "assets/images/not_found.png",
        gender: 1
    },
    {
        name: "Batman",
        description: "superheroe murcielago",
        image: "assets/images/not_found.png",
        gender: 1
    },
    {
        name: "Spiderman",
        description: "superheroe araña",
        image: "assets/images/not_found.png",
        gender: 1
    },
];


describe('Store', () => {
    
    it('delete hero', () => {
        const response = deleteHero('Superman');
        expect(response).not.toBeTrue();
    });


 

    it('set locale', () => {
        setLocalStorage(heros);
        expect().nothing();
    });

    it('set localte storgare', () => {
        setLocalStorageHero(heros[0]);
        expect().nothing();
    });

    it('get heros', () => { 
        const heros = getLocalStorage();
        expect(heros.length > 0).toBeTrue();

    })

    it('get heros', () => {
        const hero = getHero('Superman');
        expect(hero).toBeInstanceOf(Hero);

    });

    it('exist heroes', () => {
        expect(localhostIsNoEmpty()).toBeTrue();
    });
});
