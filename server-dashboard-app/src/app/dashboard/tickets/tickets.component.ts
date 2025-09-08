import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./ticket/ticket.model";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; content: string }) {
    const newTicket: Ticket = {
      id: Date.now().toString(),
      title: ticketData.title,
      content: ticketData.content,
      status: 'open'
    };

    this.tickets.push(newTicket);
  }
}
