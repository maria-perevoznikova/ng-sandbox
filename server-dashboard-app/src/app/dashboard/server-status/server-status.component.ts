import { Component, OnInit, inject, DestroyRef, signal, effect } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<ServerStatus>('offline');
  private statusList: ServerStatus[] = ['offline', 'online', 'unknown'];
  private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('Current status:', this.currentStatus());
    });
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      this.currentStatus.set(this.statusList[randomIndex]);
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.intervalId);
    });
  }
}
