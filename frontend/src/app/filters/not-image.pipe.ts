
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notImage'
})
export class NotImagePipe implements PipeTransform {
  transform(value: string) {
    let name = value;
    let newName = name.substring(0, 1)
    return newName;
  }

}
