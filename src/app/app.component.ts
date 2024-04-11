import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScrollLeftComponent } from './components/scroll-left/scroll-left.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { Headers } from './headers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuHeaderComponent, HomeComponent, ScrollLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';

  menuHeaders: Headers=
       {
    "logo": "/assets/logo.png",
    "login": "/assets/LOGIN.jpeg",
    "cor": "/assets/CORACÃO.png",
    "msn": "/assets/msn.png",
    "comprar": "Comprar",
    "vender": "Vender",
    "servico": "Serviços",
       };
}
