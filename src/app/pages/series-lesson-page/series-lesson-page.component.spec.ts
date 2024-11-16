import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesLessonPageComponent } from './series-lesson-page.component';

describe('SeriesLessonPageComponent', () => {
  let component: SeriesLessonPageComponent;
  let fixture: ComponentFixture<SeriesLessonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesLessonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
