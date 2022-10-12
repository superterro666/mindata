import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './gender/gender.pipe';
import { ImgNotFoundPipe } from './img_not_found/img-not-found.pipe';


@NgModule({
    declarations: [
        GenderPipe,
        ImgNotFoundPipe
    ],
  
  imports: [
    CommonModule
    ],
    exports: [
        GenderPipe,
        ImgNotFoundPipe
    ]
})
export class PipesModule { }
