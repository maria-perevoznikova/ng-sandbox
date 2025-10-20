import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

import {PlacesContainerComponent} from '../places-container/places-container.component';
import {PlacesComponent} from '../places.component';
import {Place} from "../place.model";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../../config";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  isError = signal(false);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      complete: () => this.isFetching.set(false),
      error: () => {
        this.isFetching.set(false);
        this.isError.set(true);
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService.removeUserPlace(selectedPlace).subscribe();
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
