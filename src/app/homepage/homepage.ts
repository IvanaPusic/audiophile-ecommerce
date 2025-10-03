import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { CategorySection } from '../category-section/category-section';
import { ProductsSection } from '../products-section/products-section';
import { AudioGearSection } from '../audio-gear-section/audio-gear-section';
@Component({
  selector: 'app-homepage',
  imports: [Hero, CategorySection, ProductsSection, AudioGearSection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
