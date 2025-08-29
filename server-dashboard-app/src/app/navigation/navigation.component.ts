import { Component } from '@angular/core';
import {ButtonComponent} from "../shared/button/button.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
    imports: [
        ButtonComponent
    ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
