import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  currentUser = signal(DUMMY_USERS[0]);
  currentAvatarPath = computed(() => {
    return `assets/users/${this.currentUser().avatar}`;
  });

  // get currentAvatarPath(): string {
  //   return `assets/users/${this.currentUser().avatar}`;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.currentUser.set(DUMMY_USERS[randomIndex]);
  }
}
