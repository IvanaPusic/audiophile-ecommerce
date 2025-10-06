import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { SpeakersSection } from '../speakers-section/speakers-section';
import { CategorySection } from '../category-section/category-section';
import { AudioGearSection } from '../audio-gear-section/audio-gear-section';
@Component({
  selector: 'app-speakers-page',
  imports: [HeroSection, SpeakersSection, CategorySection, AudioGearSection],
  templateUrl: './speakers-page.html',
  styleUrl: './speakers-page.scss',
})
export class SpeakersPage {}
