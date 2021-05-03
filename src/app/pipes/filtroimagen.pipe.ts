import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroimagen'
})
export class FiltroimagenPipe implements PipeTransform {

  transform(peliculas: any[]): any[] {

    return peliculas.filter( peli => {
      return peli.backdrop_path;
    });
  }

}
