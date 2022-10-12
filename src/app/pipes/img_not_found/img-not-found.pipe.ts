import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNotFound'
})
export class ImgNotFoundPipe implements PipeTransform {

    transform(value: string | null): unknown {
      return value ? value : 'assets/images/not_found.png';
  }

}
