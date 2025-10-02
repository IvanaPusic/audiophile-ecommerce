import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.scss',
})
export class CategoryItem {
  //! Later add id input for dynamic routing
  categoryImg = input.required<string>();
  categoryTitle = input.required<string>();
}
