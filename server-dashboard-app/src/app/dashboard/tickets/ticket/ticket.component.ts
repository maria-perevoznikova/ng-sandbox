import {Component, input, output, signal} from '@angular/core';
import {Ticket} from "./ticket.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  showContent = signal(false);
  close = output<string>();

  onToggleContent() {
    this.showContent.set(!this.showContent());
  }

  onMarkAsCompleted() {
    this.close.emit(this.data().id);
  }
}
