import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'contrasena',
})
export class ContraseñaPipe implements PipeTransform {
  transform(value: string, activar: boolean = true): string {
    if (activar) {
      let values = [];
      values = value.split('');
      // console.log(value.split(''));
      for (let i = 0; i < values.length; i++) {
        values[i] = value[i].replace(/\w*/, '*');
      }
      return values.join('');
    } else {
      return value;
    }
  }
}
