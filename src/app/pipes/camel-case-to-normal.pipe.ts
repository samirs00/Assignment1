import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToNormal'
})
export class CamelCaseToNormalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

}
