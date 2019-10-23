import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeQuotationMarks' })
export class RemoveQuotationMarks implements PipeTransform {
  transform(value: string): string {
    return value.replace(new RegExp('"', 'g'), '');
  }
}
