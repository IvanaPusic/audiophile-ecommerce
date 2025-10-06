import { Component } from '@angular/core';
import { Product } from '../product/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headphones-section',
  imports: [Product, RouterLink],
  templateUrl: './headphones-section.html',
  styleUrl: './headphones-section.scss',
})
export class HeadphonesSection {}
