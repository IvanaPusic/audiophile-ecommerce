import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen = signal<boolean>(false);

  open() {
    console.log('Modal is open!');
    this.isModalOpen.set(true);
  }

  close() {
    console.log('Modal is closed!');
    this.isModalOpen.set(false);
  }

  toggle() {
    this.isModalOpen.update((val) => !val);
  }
}
