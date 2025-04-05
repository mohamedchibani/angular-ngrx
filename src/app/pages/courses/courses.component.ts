import { Component, OnInit } from '@angular/core';
import { ListCourseComponent } from '../../components/courses/list-course/list-course.component';
import { GridCourseComponent } from '../../components/courses/grid-course/grid-course.component';
import { FormCourseComponent } from '../../components/courses/form-course/form-course.component';
import { Course } from '../../models/course';
import { AddIconComponent } from '../../components/add-icon/add-icon.component';
import { ceil, random, range, slice } from 'lodash';
import { FormsModule } from '@angular/forms';
import { courseList } from '../../data';
import { JsonPipe, KeyValuePipe, NgClass, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [
    ListCourseComponent,
    GridCourseComponent,
    FormCourseComponent,
    AddIconComponent,
    FormsModule,
    NgClass,
    KeyValuePipe,
    JsonPipe,
    PercentPipe,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = courseList;

  listDisplay = true;

  showForm = false;

  courseTemp!: Course;

  editMode = false;

  perPage = 6;

  pages: number[] = [];

  currentPage!: number;

  taux = 0.75;

  ngOnInit(): void {
    this.initPaginate();
  }

  initPaginate() {
    this.pages = range(1, ceil(courseList.length / this.perPage) + 1);
    this.paginate();
  }

  paginate(page: number = 1) {
    this.currentPage = page;
    const perPage = +this.perPage;

    const offset = (page - 1) * perPage;
    this.courses = slice(courseList, offset, offset + perPage);
  }

  onChangeView(state: boolean) {
    this.listDisplay = state;
  }

  onDeleteCourse(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  onSaveCourse(course: Course) {
    const newCourse = {
      ...course,
      id: random(10, 200),
    };

    this.courses = [newCourse, ...this.courses];
    this.onToggleForm();

    this.initForm();
  }

  onToggleForm() {
    this.showForm = !this.showForm;
  }

  onEditCourse(course: Course) {
    this.courseTemp = course;
    this.showForm = true;
    this.editMode = true;
  }

  onUpdateCourse(course: Course) {
    this.courses = this.courses.map((item) =>
      item.id === course.id ? course : item
    );

    this.initForm();

    this.showForm = false;
    this.editMode = false;
  }

  initForm() {
    this.courseTemp = {
      title: '',
      url: '',
      price: 0,
      content: '',
      active: false,
    };
  }
}
