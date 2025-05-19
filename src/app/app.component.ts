import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,HeaderComponent]
})
export class AppComponent {

}
