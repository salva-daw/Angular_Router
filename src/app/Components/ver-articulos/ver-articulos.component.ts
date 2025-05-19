import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Articulo } from '../../Modelos/articulo';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-ver-articulos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-articulos.component.html',
  styleUrl: './ver-articulos.component.css'
})
export class VerArticulosComponent {

  articulos!:Articulo[]
 
  constructor(private miRutaActiva:ActivatedRoute,
              private miServicio:ArticulosService,
              private miRouter:Router 
  ){}

  ngOnInit(){
    let precio:number
    let orden:string

    this.miRutaActiva
        .queryParams
        .subscribe(params=>{precio=params["precio"]
                            orden=params["orden"]                      
                            this.articulos=this.miServicio
                                               .filtroArticulos(precio,orden)})
  }

  volver(){
    this.miRouter.navigate(["/articulos"])
  }

}
