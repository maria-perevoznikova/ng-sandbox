import { Component, input, computed, output } from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // 'old' style input
  // @Input({required: true}) user!: User;
  // @Output() select = new EventEmitter<string>();

  // get avatarPath(): string {
  //   return `assets/users/${this.user.avatar}`;
  // }

  // signal inputs
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  avatarPath = computed(
    () => `assets/users/${this.user().avatar}`
  );

  onClickUserButton() {
    console.log('User button click:', this.user().name);
    this.select.emit(this.user().id);
  }
}
