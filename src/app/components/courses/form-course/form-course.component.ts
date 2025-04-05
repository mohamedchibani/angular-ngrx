import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  imports: [FormsModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.css',
})
export class FormCourseComponent {
  @Input() editMode = false;

  @Output() save = new EventEmitter();
  @Output() update = new EventEmitter();

  @Input() course: Course = {
    title: '',
    url: '',
    price: 0,
    content: '',
    active: false,
  };

  onSaveCourse() {
    this.save.emit(this.course);
  }

  OnUpdateCourse() {
    this.update.emit(this.course);
  }

  submit() {
    if (this.editMode) {
      this.OnUpdateCourse();
    } else {
      this.onSaveCourse();
    }
  }
}
