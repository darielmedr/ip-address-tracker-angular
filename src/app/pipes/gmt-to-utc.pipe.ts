import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gmtToUtc'
})
export class GmtToUtcPipe implements PipeTransform {

  transform(value: string | null): string | undefined {
    if (!value) return;

    return value.replace('GMT', 'UTC ');
  }

}
