import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Headers } from '../../headers';
import { Scroll } from '../../scroll';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { ScrollLeftComponent } from '../scroll-left/scroll-left.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuHeaderComponent,ScrollLeftComponent, NgFor, CommonModule]
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
