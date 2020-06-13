import {Component, OnInit} from '@angular/core';
import {Task} from './app.model';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test3';
  sizeTask = 10;
  taskToAdd = '';
  taskToFilter = '';
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
  tasksFilter = [];

  ngOnInit(): void {
    this.tasksFilter = [...this.tasks];
  }

  addClick() {
    // window.alert(this.tasks[0].id);
    this.tasks.push(new Task(this.sizeTask++, this.taskToAdd, true));
    this.tasksFilter.push(this.tasks[this.tasks.length - 1]);
    this.taskToAdd = '';
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
    // console.log('sort');
    this.tasks.sort((a, b) => b.name.localeCompare(a.name));
    this.tasksFilter.sort((a, b) => b.name.localeCompare(a.name));
  }

  filter() {
    // console.log(this.taskToFilter);
    this.tasksFilter = this.tasks.filter(val => val.name.toLowerCase().includes(this.taskToFilter.toLowerCase()));
    // console.log(this.tasksFilter);
  }

  clear() {
    // xóa nội dung input
    this.taskToFilter = '';
    // đặt task về task gốc
    this.tasksFilter = [...this.tasks];
  }
}
