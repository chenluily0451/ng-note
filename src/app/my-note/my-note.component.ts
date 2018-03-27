import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-note',
  templateUrl: './my-note.component.html',
  styleUrls: ['./my-note.component.scss']
})
export class MyNoteComponent implements OnInit {

  inputValue: String = '';
  unComplete = [];
  completed = [];
  deleted = [];
  constructor() { }

  ngOnInit() {}
  addTodos() {
    if (this.inputValue !== '') {
      const obj = {
        'things' : this.inputValue
      }
      this.unComplete.push(obj);
      this.inputValue = '';
    }
  }
  addCompleted(idx) {
    this.completed.push(this.unComplete[idx]);
    this.unComplete.splice(idx, 1);
  }
  remove(idx) {
    this.deleted.push(this.completed[idx]);
    this.completed.splice(idx, 1);
  }
  revert(idx) {
    this.completed.push(this.deleted[idx]);
    this.deleted.splice(idx, 1);
  }

}
