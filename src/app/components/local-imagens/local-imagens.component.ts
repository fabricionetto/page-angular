import { Component, Input } from '@angular/core';
import { Imagens } from '../../imagens';
@Component({
  selector: 'app-local-imagens',
  standalone: true,
  imports: [],
  templateUrl: './local-imagens.component.html',
  styleUrl: './local-imagens.component.css'
})
export class LocalImagensComponent {

  @Input() imgInterf!: Imagens;
}
