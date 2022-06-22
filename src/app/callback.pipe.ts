import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter',
})
export class cardFilterPipe implements PipeTransform {

  transform(input: any, filterString: string): any {
    if (input === undefined || input === null) {
      return input;
    }
    return input.filter(function(data) {
      return data.cardName.toLocaleLowerCase().indexOf(filterString.toLocaleLowerCase()) >= 0;
    });
  }

}
