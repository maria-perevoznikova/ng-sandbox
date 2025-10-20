import {inject, Injectable, signal} from '@angular/core';

import {Place} from './place.model';
import {BASE_URL} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.httpClient.get<{ places: Place[] }>(`${BASE_URL}/places`);
  }

  loadUserPlaces() {
    return this.httpClient.get<{ userPlaces: Place[] }>(`${BASE_URL}/user-places`);
  }

  addPlaceToUserPlaces(place: Place) {
    return this.httpClient.put<{ userPlaces: Place[] }>(`${BASE_URL}/user-places`, {
      placeId: place.id
    })
  }

  removeUserPlace(place: Place) {
    return this.httpClient.delete<{
      userPlaces: Place[]
    }>(`${BASE_URL}/user-places/${place.id}`)
  }
}
