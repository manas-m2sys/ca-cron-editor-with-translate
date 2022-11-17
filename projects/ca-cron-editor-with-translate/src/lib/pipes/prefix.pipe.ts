import {Pipe, PipeTransform} from '@angular/core';

export const ngxTranslatePrefix = 'ca-cron-editor-with-translate';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string): string {
    return `${ngxTranslatePrefix}.${value}`;
  }

}
