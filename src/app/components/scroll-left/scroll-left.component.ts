import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Scroll } from '../../scroll';
@Component({
  selector: 'app-scroll-left',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './scroll-left.component.html',
  styleUrl: './scroll-left.component.css'
})

export class ScrollLeftComponent {
  @Input() imagems!: Scroll;

  imageScrollLeft: Scroll[] = [
    {
      "id": 1,
      "photo": "/assets/cons1.png",
  },
  {
    "id": 2,
    "photo": "/assets/cons2.png",
  },
  {
  "id": 3,
  "photo": "/assets/cons3.png",
 },
 {
  "id": 4,
  "photo": "/assets/cons4.png",
 },
 {
  "id": 5,
  "photo": "/assets/cons5.png",
 },
 {
  "id": 6,
  "photo": "/assets/cons6.jpg",
 },
  ]
}
