import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

    transform(value: unknown): boolean {
      return (value === '0' || false) ? true : false;
  }

}
