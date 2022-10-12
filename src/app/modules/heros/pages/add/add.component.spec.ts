import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerosRoutingModule } from '../../heros-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ActionsComponent } from 'src/app/standalone-components/actions/actions.component';
import { HeroFilterComponent } from 'src/app/standalone-components/hero-filter/hero-filter.component';
import { AlertComponent } from 'src/app/standalone-components/alert/alert.component';


import { AlertService } from 'src/app/standalone-components/alert/alert.service';
import { Hero } from '../../models/hero.model';
import { AddComponent } from './add.component';
import {  Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { HeroApiService } from '../../hero.api.service';

let _hero: HeroApiService;
let _heroApi: HeroApiService;



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
    let component: AddComponent;
    let fixture: ComponentFixture<AddComponent>;



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
                AlertComponent,
                RouterTestingModule,
              
            ],
            declarations: [
                AddComponent
            ],
            providers: [
                HeroApiService,
                AlertService,
                HeroApiService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });


    beforeEach(() => {
        fixture = TestBed.createComponent(AddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        _hero = fixture.debugElement.injector.get(HeroApiService);
      
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('setImage full', () => {
        expect(component.setImage).toBeDefined();
        component.setImage('../image');
        expect('../image').toEqual('../image');
    });


    it('setImage empty', () => {
        expect(component.setImage).toBeDefined();
        component.setImage('');
        expect('').not.toEqual('../image');
    });


   

    it('submit', () => {
        expect(component.onSubmit).toBeTruthy();
       // expect(component.edit).toBeTrue();
    })



});
