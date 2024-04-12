import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Imagens } from '../../imagens';
import { LocalImagensComponent } from '../local-imagens/local-imagens.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgFor, CommonModule, LocalImagensComponent]
})
export class HomeComponent {

    constructor(){}

    imag: Imagens[]= [
    {
        "id": 1,
        "imagem": "assets/casa-amarela.png",
        "nome": 'Casa Amarela',
        "endereco": 'Rua: Castro Silva',
        "bairro": 'sta. Ines',
        "preco": 13.4779,
    },

    {
        "id": 2,
        "imagem": "assets/casa-azul.png",
        "nome": 'Casa Azul',
        "endereco": 'Av. Luiz Lemos',
        "bairro": 'sta. Lucia',
        "preco": 134.778,
    },

    {
        "id": 3,
        "imagem": "assets/casa-verde.png",
        "nome": 'Casa Verde',
        "endereco": 'Rua: Maria Conceição',
        "bairro": 'sta. Lucia',
        "preco": 9.995
    },
]
}
