import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ModalService } from './service/modal-service';
import { MenuModal } from './menu-modal/menu-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, Footer, MenuModal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  modalService = inject(ModalService);
}
