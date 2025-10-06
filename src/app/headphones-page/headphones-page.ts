import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { HeadphonesSection } from '../headphones-section/headphones-section';
import { CategorySection } from '../category-section/category-section';
import { AudioGearSection } from '../audio-gear-section/audio-gear-section';

@Component({
  selector: 'app-headphones-page',
  imports: [HeroSection, HeadphonesSection, CategorySection, AudioGearSection],
  templateUrl: './headphones-page.html',
  styleUrl: './headphones-page.scss',
})
export class HeadphonesPage {}
