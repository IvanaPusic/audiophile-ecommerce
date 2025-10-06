import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { EarphonesSection } from '../earphones-section/earphones-section';
import { CategorySection } from '../category-section/category-section';
import { AudioGearSection } from '../audio-gear-section/audio-gear-section';

@Component({
  selector: 'app-earphones-page',
  imports: [HeroSection, EarphonesSection, CategorySection, AudioGearSection],
  templateUrl: './earphones-page.html',
  styleUrl: './earphones-page.scss',
})
export class EarphonesPage {}
