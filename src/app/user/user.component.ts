import { Component, Input, input, computed } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // 'old' style input
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // get avatarPath(): string {
  //   return `assets/users/${this.avatar}`;
  // }

  // signal inputs
  avatar = input.required<string>();
  name = input.required<string>();

  avatarPath = computed(
    () => `assets/users/${this.avatar()}`
  );

  onSelectUser() {
    console.log('User selected:', this.name());
  }
}
