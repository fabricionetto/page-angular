import { Component } from '@angular/core';
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { ScrollLeftComponent } from '../scroll-left/scroll-left.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuHeaderComponent,ScrollLeftComponent]
})
export class HomeComponent {

}
