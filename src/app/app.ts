import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { CategorySection } from './category-section/category-section';
import { ProductsSection } from './products-section/products-section';
import { AudioGearSection } from './audio-gear-section/audio-gear-section';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Header,
    Hero,
    CategorySection,
    ProductsSection,
    AudioGearSection,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('audiophile-ecommerce');
}
