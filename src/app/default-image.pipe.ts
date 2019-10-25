import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (path.trim().length) {
      return path;
    }
    return 'default.png';
  }

}
