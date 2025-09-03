import { Component, OnDestroy, OnInit } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = 'offline';
  private statusList: ServerStatus[] = ['offline', 'online', 'unknown'];
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      this.currentStatus = this.statusList[randomIndex];
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
