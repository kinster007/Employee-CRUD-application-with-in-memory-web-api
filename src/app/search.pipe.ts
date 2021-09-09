import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], s: string): Employee[] {
    if (!value) {
      return [];
    }
    if (!s) {
      return value;
    }
    s = s.toLowerCase();
    return value.filter(n => {
      let v = n.name;
      return v.toLowerCase().startsWith(s);
    });
  }
  
}
