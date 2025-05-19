import { Injectable } from '@angular/core';
import { ARTICULOS, Articulo } from '../Modelos/articulo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor() {}

  articulos: Articulo[] = ARTICULOS;
  contador: BehaviorSubject<number> = new BehaviorSubject(
    this.articulos.length
  );
  contador$ = this.contador.asObservable();

  numArticulos: BehaviorSubject<number> = new BehaviorSubject(0);
  numArticulos$ = this.numArticulos.asObservable();

  getArticulos() {
    return this.articulos;
  }

  getArticulo(id: string) {
    let pos = this.articulos.findIndex((a) => a.id == id);
    return this.articulos[pos];
  }

  addArticulo(articulo: Articulo) {
    this.contador.next(this.contador.value + 1);

    this.articulos.push(articulo);
    this.numArticulos.next(this.numArticulos.value + 1);
  }

  putArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex((a) => a.id == articulo.id);
    this.articulos[pos] = articulo;
  }

  deleteArticulo(id: string) {
    let pos = this.articulos.findIndex((a) => a.id == id);
    this.articulos.splice(pos, 1);
    this.contador.next(this.contador.value - 1);
  }

  filtroArticulos(precio: number, orden: string) {
    let articulosFiltrados: Articulo[];
    articulosFiltrados = this.articulos.filter((a) => a.precio > precio);
    if (orden == 'asc')
      return articulosFiltrados.sort((a, b) => a.precio - b.precio);
    else return articulosFiltrados.sort((a, b) => a.precio - b.precio);
  }
}
