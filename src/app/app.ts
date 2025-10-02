import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { CategorySection } from './category-section/category-section';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, CategorySection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('audiophile-ecommerce');
}
