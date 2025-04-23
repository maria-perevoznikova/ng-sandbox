import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    standalone: true,  // true by default in Angular 19 or higher
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {}