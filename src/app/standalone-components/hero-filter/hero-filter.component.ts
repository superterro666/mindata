import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, Subscription, tap } from 'rxjs';
import { HeroFilterService } from './hero-filter.service';
import {  MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-hero-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit, OnDestroy {
    readonly filterSubject = new Subject<string | any>();
    subscription?: Subscription;
    @Input() heros: any[] = [];
    @Output() filterEmitter: EventEmitter<any> = new EventEmitter();
    name!: NgModel;
    constructor(private _filter: HeroFilterService) { }

    ngOnInit(): void {
        this.subscription = this.filterSubject
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                tap((query) => {
                    this.filterEmitter.emit(this._filter.search(query) )
                })
            )
            .subscribe();
    }
    
    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
    
    public search(event: Event): void {
        const query = (event.target as HTMLInputElement).value;
        this.filterSubject.next(query);
    }

}
