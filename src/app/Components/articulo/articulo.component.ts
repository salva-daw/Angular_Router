import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../Modelos/articulo';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  articulo!: Articulo;
  constructor(
    private miRutaActiva: ActivatedRoute,
    private miServicio: ArticulosService
  ) {}

  ngOnInit() {
    /* this.miRutaActiva.params.subscribe(
      (params) => (this.articulo = this.miServicio.getArticulo(params['id'])),
      (error) => console.log(error)
    ); */

    this.miRutaActiva.params.subscribe({
      next: (params) => {
        console.log('Entrando a params');
        this.articulo = this.miServicio.getArticulo(params['id']);
      },
      error: (error) => console.log(error),
      complete: () => console.log('Fin de params'),
    });
  }
}
