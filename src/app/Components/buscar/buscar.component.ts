import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  precio!:number
  orden!:string

  constructor(private miRutaActiva:ActivatedRoute){}
  
  ngOnInit(){
    this.miRutaActiva.queryParams.subscribe(params=>{this.precio=params["precio"]
                                                     this.orden=params["orden"]
                                                    })
    console.log(this.precio)
    console.log(this.orden)
  }

}
