import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { HeadphonesSection } from '../headphones-section/headphones-section';

@Component({
  selector: 'app-headphones-page',
  imports: [HeroSection, HeadphonesSection],
  templateUrl: './headphones-page.html',
  styleUrl: './headphones-page.scss',
})
export class HeadphonesPage {}
