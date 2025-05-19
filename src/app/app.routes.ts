import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { ErrorComponent } from './Components/error/error.component';
import { BuscarComponent } from './Components/buscar/buscar.component';
import { ArticuloComponent } from './Components/articulo/articulo.component';
import { VerArticulosComponent } from './Components/ver-articulos/ver-articulos.component';
import { guarda1Guard } from './Guards/guarda1.guard';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'articulos', 
      component: ArticulosComponent, 
      canActivate:[guarda1Guard]
    },
    { path: 'articulo/:id', component: ArticuloComponent },
    { path: 'verArticulos', component: VerArticulosComponent },
    { path: '**', component: ErrorComponent }
  ]
  
