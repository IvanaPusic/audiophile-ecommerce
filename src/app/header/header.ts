import { Component, input, signal, inject } from '@angular/core';
import { ModalService } from '../service/modal-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  modalService = inject(ModalService);

  toggleModal() {
    this.modalService.toggle();
  }
}
