import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMyAge'
})
export class ShowMyAgePipe implements PipeTransform {

  transform(value: number, name: string): string {
    return 'Hi ' + name + ' Youe Age is :' + value;
  }

}
