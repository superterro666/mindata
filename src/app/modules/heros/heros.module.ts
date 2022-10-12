import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosRoutingModule } from './heros-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ImageComponent } from 'src/app/standalone-components/image/image.component';
import { ActionsComponent } from 'src/app/standalone-components/actions/actions.component';
import { HeroFilterComponent } from 'src/app/standalone-components/hero-filter/hero-filter.component';
import { AlertComponent } from 'src/app/standalone-components/alert/alert.component';
import { ToUpperCaseDirective } from 'src/app/directives/toUpperCase/to-upper-case.directive';


@NgModule({
    declarations: [
        AddComponent,
        ListComponent,
        ToUpperCaseDirective
    ],
    imports: [
        CommonModule,
        HerosRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatTableModule,
        PipesModule,
        ImageComponent,
        ActionsComponent,
        HeroFilterComponent,
        AlertComponent,
     
    
    ]
})
export class HerosModule {
   
}
