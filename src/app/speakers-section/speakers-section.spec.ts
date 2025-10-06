import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersSection } from './speakers-section';

describe('SpeakersSection', () => {
  let component: SpeakersSection;
  let fixture: ComponentFixture<SpeakersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
