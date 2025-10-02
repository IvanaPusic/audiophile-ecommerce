import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  customClass = input<string>();
}
