import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-earphones-section',
  imports: [Product],
  templateUrl: './earphones-section.html',
  styleUrl: './earphones-section.scss',
})
export class EarphonesSection {}
