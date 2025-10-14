import {Component, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  customInterval$ = new Observable(subscriber => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }

      subscriber.next({message: 'Emitting from custom interval'});
      timesExecuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('Click count:', this.clickCount());
    });
  }

  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(map(count => count * 2))
      .subscribe(count => {
        console.log(count);
      });

    const customSubscription = this.customInterval$.subscribe({
      next: (data) => console.log('Custom interval subscription:', data),
      complete: () => console.log('Custom interval completed'),
      error: (error) => console.error('Custom interval error:', error)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      customSubscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update(count => count + 1);
  }
}
