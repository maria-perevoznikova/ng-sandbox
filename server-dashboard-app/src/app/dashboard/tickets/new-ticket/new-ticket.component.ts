import {Component} from '@angular/core';
// import {ElementRef, viewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // viewChild function to access the form element
  // private formSignal = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, content: string, form: HTMLFormElement) {
    console.log('Ticket title: ', title);
    console.log('Ticket content: ', content);
    form.reset();
    // this.formSignal().nativeElement.reset();
  }
}
