import { Component, OnInit } from '@angular/core';
import { LoaderService } from './interceptors/loader/loader.service';
import { NgxSpinnerService } from "ngx-spinner";
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
     loading: boolean = false;
     constructor(public loaderService: LoaderService, private spinner: NgxSpinnerService) {}
     ngOnInit(): void  { 
        this.loaderService.$isLoading.subscribe((v) => {
            if (v) {
                this.spinner.show();
            } else {
                this.spinner.hide();
            }
        });
    }
}
