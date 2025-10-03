import { Component, input, signal, inject } from '@angular/core';
import { ModalService } from '../service/modal-service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  modalService = inject(ModalService);

  toggleModal() {
    this.modalService.toggle();
  }
}
