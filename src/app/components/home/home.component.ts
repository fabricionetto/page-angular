import { Component } from '@angular/core';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { ScrollLeftComponent } from '../scroll-left/scroll-left.component';
import { Headers } from '../../headers';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuHeaderComponent,ScrollLeftComponent]
})
export class HomeComponent {
   menuHeaders: Headers=
       {
    "logo": "/assets/logo.png",
    "login": "/assets/LOGIN.jpeg",
    "cor": "/assets/CORACÃO.png",
   "msn": "/assets/msn.png",
    "comprar": "Comprar",
    "vender": "Vender",
    "servico": "Serviços",
       }
}
