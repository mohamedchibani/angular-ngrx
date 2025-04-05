import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { EditIconComponent } from '../../edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../delete-icon/delete-icon.component';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ResumePipe } from '../../../pipes/resume.pipe';

@Component({
  selector: 'app-list-course',
  imports: [
    EditIconComponent,
    DeleteIconComponent,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DecimalPipe,
    DatePipe,
    SlicePipe,
    ResumePipe,
  ],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css',
})
export class ListCourseComponent {
  @Input({ alias: 'all-courses', required: true }) courses: Course[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  onDeleteCourse(id: number) {
    this.delete.emit(id);
  }

  onEditCourse(course: Course) {
    this.edit.emit(course);
  }
}
