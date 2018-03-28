import { Component, OnInit } from '@angular/core';
import { ls_completed, ls_uncompleted, ls_deleted} from '../../service/storage';

@Component({
  selector: 'app-my-note',
  templateUrl: './my-note.component.html',
  styleUrls: ['./my-note.component.scss']
})
export class MyNoteComponent implements OnInit {

  inputValue: String = '';
  unComplete = ls_uncompleted.get() || [];
  completed = ls_completed.get() || [];
  deleted = ls_deleted.get() || [];
  constructor() { }

  ngOnInit() {
    this.getAll();
  }
  addTodos() {
    if (this.inputValue !== '') {
      const obj = {
        'things' : this.inputValue
      };
      this.unComplete.push(obj);
      this.inputValue = '';
      ls_uncompleted.set(this.unComplete);
    }
  }
  addCompleted(idx) {
    this.completed.push(this.unComplete[idx]);
    this.unComplete.splice(idx, 1);

    ls_completed.set(this.completed);
    ls_uncompleted.set(this.unComplete);
  }
  remove(idx) {
    this.deleted.push(this.completed[idx]);
    this.completed.splice(idx, 1);

    ls_deleted.set(this.deleted);
    ls_completed.set(this.completed);
  }
  revert(idx) {
    this.completed.push(this.deleted[idx]);
    this.deleted.splice(idx, 1);

    ls_completed.set(this.completed);
    ls_deleted.set(this.deleted);
  }
  getAll() {
    ls_completed.get();
    ls_uncompleted.get();
    ls_deleted.get();
  }

}
