import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  PeliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
 

  constructor(private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.getFeature().subscribe( res => {
      //console.log(res.results);
      this.PeliculasRecientes = res.results;
    });

    this.getPopulares();

  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.movieService.getPopulares().subscribe( res => {
      const arrayTemp = [...this.populares, ...res.results];
      this.populares = arrayTemp;
      //this.populares = res.results;
    });
  }

}
