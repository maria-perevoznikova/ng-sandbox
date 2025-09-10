import {Component, input, output, signal} from '@angular/core';
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
  add = output<{title: string, content: string}>();
  enteredTitle = signal<string>('');
  enteredRequestText = signal<string>('');

  onSubmit(title: string, content: string, form: HTMLFormElement) {
    console.log('Submit ticket', title, content);

    // use two-way binding with signals
    this.add.emit({title: this.enteredTitle(), content: this.enteredRequestText()});
    this.enteredTitle.set('');
    this.enteredRequestText.set('');

    // use template reference variable to access the form element
    // this.add.emit({title, content});
    // form.reset();
    // this.formSignal().nativeElement.reset();
  }
}
