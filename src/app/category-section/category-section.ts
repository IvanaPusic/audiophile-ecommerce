import { Component } from '@angular/core';
import { CategoryItem } from './category-item/category-item';

@Component({
  selector: 'app-category-section',
  imports: [CategoryItem],
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
})
export class CategorySection {}
