import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformToSelector' })
export class TransformToSelector implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(new RegExp('"', 'g'), '')
      .substring(0, 4)
      .toLowerCase();
  }
}
