import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  contador!: number;
  constructor(private miRouter: Router, private miServicio: ArticulosService) {}

  ngOnInit() {
    /* this.miServicio.contador$.subscribe((dato) => (this.contador = dato)); */
    this.miServicio.contador$.subscribe({
      next: (dato) => {
        console.log('nuevo dato: ' + dato);
        this.contador = dato;
      },
      error: (error) => console.log('Error'),
      complete: () => console.log('Fin'),
    });
  }

  verArticulos() {
    this.miRouter.navigate(['/verArticulos'], {
      queryParams: { precio: 300, orden: 'asc' },
    });
  }
}
