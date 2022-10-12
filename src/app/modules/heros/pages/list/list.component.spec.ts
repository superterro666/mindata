import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerosRoutingModule } from '../../heros-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ListComponent } from './list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ActionsComponent } from 'src/app/standalone-components/actions/actions.component';
import { HeroFilterComponent } from 'src/app/standalone-components/hero-filter/hero-filter.component';
import { AlertComponent } from 'src/app/standalone-components/alert/alert.component';

import { AlertService } from 'src/app/standalone-components/alert/alert.service';
import { Hero } from '../../models/hero.model';
import { HeroApiService } from '../../hero.api.service';

let _hero: HeroApiService;
let _alert: AlertService;


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


describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;



    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                HerosRoutingModule,
                HttpClientTestingModule,
                MatIconModule,
                MatTableModule,
                PipesModule,
                ActionsComponent,
                HeroFilterComponent,
                AlertComponent
            ],
            declarations: [
                ListComponent
            ],
            providers: [
                HeroApiService,
                AlertService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });


    beforeEach(() => { 
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        _hero = fixture.debugElement.injector.get(HeroApiService);
        _alert = fixture.debugElement.injector.get(AlertService);
    })


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('searchResult full', () => {
        expect(component.searchResults).toBeDefined();
        component.searchResults(heros);
        expect(component.heros[0]).toBeInstanceOf(Object);
        expect(component.heros).not.toHaveSize(0);
    });

    it('searchResult empty', () => {
        expect(component.searchResults).toBeDefined();
        const hero = [] = [];
        component.searchResults(hero);
        expect(hero).toHaveSize(0);
    });


    
});
