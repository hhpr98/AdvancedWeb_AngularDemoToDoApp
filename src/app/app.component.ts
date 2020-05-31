import {Component} from '@angular/core';
import {Task} from './app.model';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test3';
  sizeTask = 10;
  taskToAdd = '';
  tasks = [
    new Task(0, 'Đi ngủ', true),
    new Task(1, 'Học bài', false),
    new Task(2, 'Thức dậy', true),
    new Task(3, 'Ăn', true),
    new Task(4, 'Ngủ', true),
    new Task(5, 'Nghỉ', true),
    new Task(6, 'Thăm ngàn', true),
    new Task(7, 'Thăm ngàn', true),
    new Task(8, 'Kẹp ngần', true),
    new Task(9, 'Get money', true),

  ];

  addClick() {
    // window.alert(this.tasks[0].id);
    this.tasks.push(new Task(this.sizeTask++, this.taskToAdd, true));
  }

  checkClick(id) {
    // window.alert(id);

    this.tasks.forEach((item) => {
      if (item.id === id) {
        const tmp = item.isActive;
        // window.alert('tmp = ' + tmp);
        tmp === true ? item.isActive = false : item.isActive = true;
        return;
      }});
  }

  sortClick() {
    this.tasks.sort((a, b) => b.name.localeCompare(a.name));
  }
}
