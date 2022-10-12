import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/standalone-components/alert/alert.service';
import { Hero } from '../../models/hero.model';
import { HeroApiService } from '../../hero.api.service';
import { LoaderService } from 'src/app/interceptors/loader/loader.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
  
})
export class ListComponent implements OnInit {
    displayedColumns: string[] = ['image', 'name', 'description', 'gender', 'actions'];
    heros: Hero[] = [];

    constructor(private _hero: HeroApiService, private router: Router, private _alert: AlertService, private _loader: LoaderService) {
    }

    ngOnInit(): void {
        this._hero.getHeros().subscribe((heros: Hero[]) => {
            if (heros) {
                this.heros = heros;
            }
        });
        this._alert.$subject.subscribe((alert: any) => {
            if (alert.status) {
                this.heros = this.heros.filter(h => h.name == alert.index);
            }
        });

       
      
        
        
    }


    toAdd(): void {
        this.router.navigate(['/']);
    }

    searchResults(event: any): void {
        this.heros = event;
    }

}
