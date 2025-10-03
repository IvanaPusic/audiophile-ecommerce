import { Routes } from '@angular/router';
import { App } from './app';
import { Homepage } from './homepage/homepage';
import { HeadphonesPage } from './headphones-page/headphones-page';
import { SpeakersPage } from './speakers-page/speakers-page';
import { EarphonesPage } from './earphones-page/earphones-page';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'headphones', component: HeadphonesPage },
  { path: 'speakers', component: SpeakersPage },
  { path: 'earphones', component: EarphonesPage },
];
