import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Notification } from '../../models/notification';
import { EditIconComponent } from '../../components/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../components/delete-icon/delete-icon.component';

@Component({
  selector: 'app-todos',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    EditIconComponent,
    DeleteIconComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  title = 'All Todos';

  defaultTodo = 'Write a todo ...';

  showForm = false;

  todos: string[] = ['Angular', 'React.js', 'Svelte', 'Spring Boot'];

  myTodo = '';
  isEditMode = false;
  indexTodoEdit = -1;

  notify = false;
  notification: Notification = {
    message: '',
    position: '',
    alertClass: '',
    duration: 3000,
  };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  changeToggleBtn() {
    return this.showForm ? 'Hide' : 'Show';
  }

  showTitle() {
    return this.title;
  }

  onAddTodo() {
    this.todos = [this.myTodo, ...this.todos];
    this.onInitTodo();
    this.triggerNotification({
      message: 'Todo created successfuly',
      position: 'toast-end',
      alertClass: 'alert-success',
      duration: 3000,
    });
  }

  onEditTodo(todo: string, index: number) {
    this.myTodo = todo;
    this.showForm = true;
    this.isEditMode = true;
    this.indexTodoEdit = index;
  }

  onUpdateTodo() {
    if (this.indexTodoEdit >= 0) {
      this.todos[this.indexTodoEdit] = this.myTodo;
      this.onInitTodo();
      this.triggerNotification({
        message: 'Todo updated successfuly',
        position: 'toast-end',
        alertClass: 'alert-warning',
        duration: 3000,
      });
    }
  }

  onDeleteTodo(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos = this.todos.filter((_, i) => i !== index);
        Swal.fire({
          title: 'Todo is deleted!',
          text: 'Your todo has been deleted.',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
        });
        this.triggerNotification({
          message: 'Todo deleted successfuly',
          position: 'toast-end',
          alertClass: 'alert-error',
          duration: 5000,
        });
      }
    });
  }

  onInitTodo() {
    this.myTodo = '';
    this.isEditMode = false;
    this.showForm = false;
    this.indexTodoEdit = -1;
  }

  triggerNotification(customNotify: Notification) {
    this.notification = {
      ...customNotify,
    };

    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, customNotify.duration);
  }

  onCancel() {
    this.onInitTodo();
    this.triggerNotification({
      message: 'Update is canceled',
      position: 'toast-end',
      alertClass: 'alert-neutral',
      duration: 2000,
    });
  }

  onSubmit() {
    if (!this.validateTodo()) {
      return;
    }

    if (this.isEditMode) {
      this.onUpdateTodo();
    } else {
      this.onAddTodo();
    }
  }

  validateTodo() {
    if (!this.myTodo) {
      this.triggerNotification({
        message:
          'Please check the data typed in the input, Todo text is required !',
        position: 'toast-end',
        alertClass: 'alert-error',
        duration: 3000,
      });
      return false;
    }

    return true;
  }
}
