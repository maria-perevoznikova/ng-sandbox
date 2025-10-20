import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import {Place} from '../place.model';
import {PlacesComponent} from '../places.component';
import {PlacesContainerComponent} from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from '../../config';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[]>([]);
  isFetching = signal(false);
  isError = signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{ places: Place[] }>(`${BASE_URL}/places`).subscribe({
      next: (data) => this.places.set(data.places),
      complete: () => this.isFetching.set(false),
      error: () => {
          this.isFetching.set(false);
          this.isError.set(true);
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.httpClient.put<{ userPlaces: Place[] }>(`${BASE_URL}/user-places`, {
      placeId: selectedPlace.id
    }).subscribe(
      (data) => {
        console.log('Added to user places, total amount of places:', data.userPlaces.length);
      }
    );
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
