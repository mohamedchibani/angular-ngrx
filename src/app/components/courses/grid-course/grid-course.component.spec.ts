import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCourseComponent } from './grid-course.component';

describe('GridCourseComponent', () => {
  let component: GridCourseComponent;
  let fixture: ComponentFixture<GridCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
