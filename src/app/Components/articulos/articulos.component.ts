import { Component } from '@angular/core';
import { ArticulosService } from '../../Services/articulos.service';
import { Articulo } from '../../Modelos/articulo';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [RouterLink],
  /*  providers:[ArticulosService], */
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css',
})
export class ArticulosComponent {
  articulos!: Articulo[];

  constructor(private miServicio: ArticulosService, private miRouter: Router) {}

  ngOnInit() {
    this.articulos = this.miServicio.getArticulos();
  }

  volver() {
    this.miRouter.navigate(['/']);
  }

  nuevoArticulo() {
    let nuevoArticulo = {
      id: 'xx',
      nombre: 'xxxxxxxxxxxxxxxx',
      descripcion: 'xxx yyy zzz',
      unidades: 10,
      precio: 229,
    };
    this.miServicio.addArticulo(nuevoArticulo);
  }

  borrarArticulo(id: string) {
    this.miServicio.deleteArticulo(id);
  }
}
