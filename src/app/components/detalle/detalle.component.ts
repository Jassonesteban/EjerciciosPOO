import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  slideOptCast = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private moviesService: MoviesService, private modalController: ModalController, private dataLocalService: DataLocalService) { }

  ngOnInit() {
    this.dataLocalService.existePelicula(this.id).then(existe => this.estrella =(existe) ? 'star' : 'star-outline');

    this.moviesService.getPeliculaDetalle(this.id).subscribe(res => {
        console.log(res);
        this.pelicula = res;
    });

    this.moviesService.getActoresPelicula(this.id).subscribe(res => {
      console.log(res);
      this.actores = res.cast;
  });
  }

  Regresar(){
    this.modalController.dismiss();
  }

  favorito(){
  const existe =  this.dataLocalService.guardarPelicula(this.pelicula);
  this.estrella = (existe) ? 'star' : 'star-outline';
  }


}
