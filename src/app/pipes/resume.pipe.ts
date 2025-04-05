import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume',
})
export class ResumePipe implements PipeTransform {
  transform(value: string, limit = 50): string {
    if (!value || value === '') return '';

    if (value.length < limit) return value;

    return value.substring(0, limit) + '...';
  }
}
