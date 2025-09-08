import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./ticket/ticket.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  private testTicket: Ticket = {
    id: 't1',
    title: 'Test Ticket',
    content: 'This is a test ticket',
    status: 'open'
  };
  tickets: Ticket[] = [this.testTicket];

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
