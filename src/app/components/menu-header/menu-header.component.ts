import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Headers } from '../../headers';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
@Input() interHeaders!: Headers;
}
