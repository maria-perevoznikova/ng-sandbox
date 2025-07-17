import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import {TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
