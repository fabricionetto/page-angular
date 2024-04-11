import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Headers } from '../../headers';
import { Imagens } from '../../imagens';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { ScrollLeftComponent } from '../scroll-left/scroll-left.component';
import { LocalImagensComponent } from '../local-imagens/local-imagens.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuHeaderComponent,ScrollLeftComponent, NgFor, CommonModule, LocalImagensComponent]
})
export class HomeComponent {

 
    imag: Imagens[]= [{
        "id": 1,
        "imagem": "assets/casa-amarela.png",
        "nome": 'Casa Amarela',
        "endereco": 'Rua: Castro Silva',
        "bairro": 'sta. Ines',
        "preco": 13.4779
    },
    {
        "id": 2,
        "imagem": "assets/casa-azul.png",
        "nome": 'Casa Azul',
        "endereco": 'Av. Luiz Lemos',
        "bairro": 'sta. Lucia',
        "preco": 134.778
    },
    {
        "id": 3,
        "imagem": "/assets/casa-rosa.jpg",
        "nome": 'Casa Rosa',
        "endereco": 'Rua: Maria Conceição',
        "bairro": 'Madre Gertudres',
        "preco": 9.995
    },]
}
