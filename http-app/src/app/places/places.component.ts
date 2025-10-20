import { Component, input, output } from '@angular/core';

import { Place } from './place.model';
import { BASE_URL } from '../config';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  places = input.required<Place[]>();
  selectPlace = output<Place>();

  onSelectPlace(place: Place) {
    this.selectPlace.emit(place);
  }

  getImageSrc(place: Place): string {
    return `${BASE_URL}/${place.image.src}`;
  }
}
