import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
