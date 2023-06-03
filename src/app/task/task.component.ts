import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: { state: boolean; text: string } = { state: false, text: '' };

  taskClickEvent() {
    this.task.state = !this.task.state;
  }
}
