import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditIconComponent } from '../../edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../delete-icon/delete-icon.component';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-card-course',
  imports: [EditIconComponent, DeleteIconComponent],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css',
})
export class CardCourseComponent {
  @Input() course!: Course;
  @Output() delete = new EventEmitter();

  deleteCourse(id: number) {
    this.delete.emit(id);
  }
}
