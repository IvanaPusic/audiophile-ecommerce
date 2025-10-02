import { Component } from '@angular/core';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-section',
  imports: [ProductCard],
  templateUrl: './products-section.html',
  styleUrl: './products-section.scss',
})
export class ProductsSection {}
