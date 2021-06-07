import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readable',
})
export class ReadablePipe implements PipeTransform {
  // tslint:disable-next-line: typedef
  transform(value: string) {
    if (typeof value !== 'string') {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    value = value[0].toUpperCase() + value.slice(1);
    return value;
  }
}
