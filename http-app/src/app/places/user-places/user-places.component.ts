import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import {PlacesContainerComponent} from '../places-container/places-container.component';
import {PlacesComponent} from '../places.component';
import {Place} from "../place.model";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../../config";

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[]>([]);
  isFetching = signal(false);
  isError = signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{ userPlaces: Place[] }>(`${BASE_URL}/user-places`).subscribe({
      next: (data) => this.places.set(data.userPlaces),
      complete: () => this.isFetching.set(false),
      error: () => {
        this.isFetching.set(false);
        this.isError.set(true);
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.httpClient.delete<{
      userPlaces: Place[]
    }>(`${BASE_URL}/user-places/${selectedPlace.id}`).subscribe(
      data => this.places.set(data.userPlaces),
    );
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
