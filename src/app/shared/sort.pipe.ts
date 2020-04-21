import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  actualItems: any[];

  transform(items: any[], fieldName: string, value: string): any[] {
    // console.log(items);
    if (!items || !fieldName) {
      return items;

    }
      if (value === 'High') {
        console.log(value);
        items.sort((low, high) => (high[fieldName] > low[fieldName]) ? 1 : -1);
        return items;
      }
      else if (value === 'Low') {
        console.log(value);
        items.sort((low, high) => (low[fieldName] > high[fieldName]) ? 1 : -1);
        return items;
      }
      else {
        return items;
      }
  }
}


