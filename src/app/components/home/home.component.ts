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
    {
        "id": 4,
        "imagem": "/assets/casa-preta.png",
        "nome": 'Casa Preta',
        "endereco": 'Rua: Bernado Monteiro',
        "bairro": 'Cocais',
        "preco": 45.854,
    },

    {
        "id": 5,
        "imagem": "/assets/casa-roxa.jpg",
        "nome": 'Casa Roxa',
        "endereco": 'Av. Mauro Silva',
        "bairro": 'Camargos',
        "preco": 434.778,
    },

    {
        "id": 6,
        "imagem": "/assets/casa-vemelha.png",
        "nome": 'Casa Vermelha',
        "endereco": 'Beco: X45',
        "bairro": 'Cabana',
        "preco": 8.995
    },
    {
        "id": 7,
        "imagem": "/assets/default.jpg",
        "nome": 'default',
        "endereco": 'default',
        "bairro": 'default',
        "preco": 0,
    },
    {
        "id": 8,
        "imagem": "/assets/default.jpg",
        "nome": 'default',
        "endereco": 'default',
        "bairro": 'default',
        "preco": 0,
    },
    {
        "id": 9,
        "imagem": "/assets/default.jpg",
        "nome": 'default',
        "endereco": 'default',
        "bairro": 'default',
        "preco": 0,
    },

    

    
]
}
