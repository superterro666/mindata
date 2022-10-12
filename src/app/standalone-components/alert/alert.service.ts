import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    subject: Subject<boolean> = new Subject();
    $subject = this.subject.asObservable();
  
    alert(status: boolean | undefined) : void { 
        status = status ? status : false;
        this.subject.next(status);
        this.subject.complete();
    }
}

export interface IAlert {
    index: string;
    status: boolean;
}
