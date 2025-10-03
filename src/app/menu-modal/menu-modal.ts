import { Component, inject } from '@angular/core';
import { ModalService } from '../service/modal-service';
import { CategorySection } from '../category-section/category-section';
@Component({
  selector: 'app-menu-modal',
  imports: [CategorySection],
  templateUrl: './menu-modal.html',
  styleUrl: './menu-modal.scss',
})
export class MenuModal {}
