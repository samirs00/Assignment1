import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(value, args:string[]) : any {
    return  Object.values(value)[0];
  }

}
