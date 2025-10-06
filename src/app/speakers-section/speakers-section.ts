import { Component } from '@angular/core';
import { Product } from '../product/product';
@Component({
  selector: 'app-speakers-section',
  imports: [Product],
  templateUrl: './speakers-section.html',
  styleUrl: './speakers-section.scss',
})
export class SpeakersSection {}
