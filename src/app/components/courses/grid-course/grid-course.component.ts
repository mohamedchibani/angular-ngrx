import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-grid-course',
  imports: [CardCourseComponent],
  templateUrl: './grid-course.component.html',
  styleUrl: './grid-course.component.css',
})
export class GridCourseComponent {
  @Input() courses: Course[] = [];
  @Output() delete = new EventEmitter();

  onDeleteCourse(id: number) {
    this.delete.emit(id);
  }
}
