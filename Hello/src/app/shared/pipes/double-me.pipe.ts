import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleMe'
})
export class DoubleMePipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if (args != null) {
      return value * args;
    }
    return value * 2;
  }

}
