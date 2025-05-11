import { Component, input, computed, output } from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // 'old' style input
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter<string>();

  // get avatarPath(): string {
  //   return `assets/users/${this.avatar}`;
  // }

  // signal inputs
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  avatarPath = computed(
    () => `assets/users/${this.avatar()}`
  );

  onClickUserButton() {
    console.log('User button click:', this.name());
    this.select.emit(this.id());
  }
}
