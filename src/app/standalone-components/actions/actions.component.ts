import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Hero } from '../../modules/heros/models/hero.model';
import { Router } from '@angular/router';
import { AlertComponent, DialogDelete } from '../alert/alert.component';
import { HeroApiService } from 'src/app/modules/heros/hero.api.service';






@Component({
    selector: 'app-actions',
    standalone: true,
    imports: [CommonModule, MatIconModule, DialogDelete, AlertComponent],
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    @Input() hero!: Hero;
    @Output() deleteEmit: EventEmitter<any> = new EventEmitter();
    @ViewChild(AlertComponent) alertComponent!: AlertComponent;
    constructor(private router: Router, private _hero: HeroApiService) { }

    ngOnInit(): void {
    }

    edit(): void {
        this.router.navigate(['/hero/add/', this.hero.name])
    }
    delete(): void {
        this.alertComponent.openDialog();
    }

    deleteFromComponent(event: boolean): void {
        if (event) {
            this._hero.deleteHero(this.hero.name).subscribe(heros => {
                this.deleteEmit.emit(heros);
            });
        }
    }


}
