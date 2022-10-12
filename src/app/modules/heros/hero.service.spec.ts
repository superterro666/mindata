import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Hero } from './models/hero.model';
import { HeroApiService } from "./hero.api.service";



describe('Hero Api Service', () => {
   
    let apiService: HeroApiService;

    
    const mookHeroApiService = {
        setHero: (hero: Hero) => {
            if (hero instanceof Hero) {
                mookHeros.push(new Hero(hero));
                return true;
            }
            return false;
        },
        existHeros: () => { return heros && heros.length > 0 ? true : false; },
        deleteHero: (name: string) => { return heros.filter((hero: Hero) => hero.name != name) },
        findHero: (name: string, abc: string) => { return name.toLowerCase().indexOf(abc) },

    }
    
  
    let heros: Hero[] = [
        {
            name: 'Superman',
            description: 'Hombre de acero',
            image: '../',
            gender: 1
        },
        {
            name: 'Spiderman',
            description: 'Hombre de araña',
            image: '../',
            gender: 1
        },
        
    ];

    let mookHeros: Hero[] = heros;

   


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:
                [
                  HttpClientTestingModule,   
              
                ],
            declarations: [],
            providers:
                [
                   
                    {
                        provide: HeroApiService,
                        userValue: mookHeroApiService
                    }

                ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
        });
    });


    beforeEach(() => {
      //  service = TestBed.inject(HeroService);
        apiService = TestBed.inject(HeroApiService);
    });

  

    it('api save Hero', () => {
        expect(apiService.saveHero).toBeTruthy();
        apiService.saveHero(new Hero(heros[0])).then(hero => {
            
            expect(hero).toBeInstanceOf(Hero);
            expect(hero).not.toBeNull();
        });
    });



   

    it('array set hero ok', () => {
        const h = new Hero(heros[2]);
        if (mookHeros.length > 2) {
            mookHeros.pop();
        }
        expect(mookHeros.length).toEqual(2);
        mookHeroApiService.setHero(h);
        expect(mookHeros.length).toEqual(3);
    });


   
    it('update hero', () => {
        expect(apiService.editHero).toBeTruthy();
        apiService.editHero(new Hero(heros[0]), 'Superman').then(hero => {
            expect(hero).toBeInstanceOf(Hero);
            expect(hero).not.toBeNull();
        }).catch(err => { });
    });

    it('get hero exist', () => {
        expect(apiService.getHero).toBeTruthy();
        apiService.getHero('Superman').subscribe(hero => {
            expect(hero).toBeInstanceOf(Hero);
            expect(hero).not.toBeNull();
            expect(heros.length > 0).toBe(true)
        });
    });

    it('get hero by name', () => {
        expect(apiService.getHeroByName).toBeTruthy();
        apiService.getHeroByName('Superman').subscribe((hero: Hero) => {
            expect(new Hero(hero)).toBeInstanceOf(Hero);
            
        })
     })

   

    
    

    it('delete  hero', () => {
        console.log("aqui estoy")
        apiService.deleteHero('Superman').subscribe(name => {
            console.log(name)
            expect(name).not.toBeNull();
          
          //expect(new Hero(resp[0])).toBeInstanceOf(Hero);
        })
    });
});
