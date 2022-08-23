import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(string: string): string {
    if (string !== '') {
      const fullString: string[] = string.split(' ');

      const firstString: string = fullString.shift() || '';
      let initials: string = firstString?.charAt(0) || '';

      if (fullString.length > 0) {
        initials += fullString.pop()?.charAt(0) || '';
      } else {
        initials += firstString?.charAt(1) || '';
      }

      return initials.toUpperCase();
    }

    return '';
  }
}
