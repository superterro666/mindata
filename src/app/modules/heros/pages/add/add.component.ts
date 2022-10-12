import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NameNotRepeatValidator } from 'src/app/custom_validators/name_not_repeat/name_not_repeat';
import { HeroApiService } from '../../hero.api.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    hero: Hero;
    form: FormGroup;
    path!: string | File | boolean;
    edit!: string;
   
    
    constructor(private _hero: HeroApiService, private router: Router, private route: ActivatedRoute) {
        
        this.hero = new Hero(null);
        this.path = "https://via.placeholder.com/230x310";
        this.form = new FormGroup({
            name: new FormControl(this.hero.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20), NameNotRepeatValidator()]),
            description: new FormControl(this.hero.description, Validators.required),
            gender: new FormControl(this.hero.gender, Validators.required),
            image: new FormControl(this.hero.image),
        });

  }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['name']) {
                this.edit = params['name'];
                this._hero.getHero(params['name']);
                
                if (this.edit) {
                    this.form.controls['name'].setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(20)])
                }
                this._hero.getHeroByName(this.edit).subscribe((hero: Hero) => {
                    this.path = hero.image ? hero.image : this.path;
                    this.form.setValue({
                        name: hero.name,
                        description: hero.description,
                        gender: hero.gender,
                        image: this.path
                    });
                });
            }
        })
    }
    
    setImage(event: string): void {
     
        this.form.value.image = event;
    }
    
    onSubmit(): void {
        if (this.form.valid) {
            this.hero = new Hero(this.form.value);
            if (!this.edit) {
                this.hero.name = this.hero.name.toUpperCase();
                this._hero.saveHero(this.hero).then((hero) => {
                this.router.navigate(['/hero/list']);
            }).catch((error) => { 
                console.error(error);
            });
            } else {
                this._hero.editHero(this.hero, this.edit).then((hero) => {
                    this.router.navigate(['/hero/list']);
                }).catch((error) => {
                    console.error(error);
                });
            }
           
        }
    }

}
