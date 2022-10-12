import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public isLoading = new BehaviorSubject(false);
    public $isLoading = this.isLoading.asObservable();
    
    nextValue(value: boolean): void { 
        this.isLoading.next(value);
    }
}