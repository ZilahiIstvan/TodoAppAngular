import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowData: { state: boolean; text: string }[] = [
    { state: false, text: 'Complete online JavaScript course' },
    { state: false, text: 'Jog around the park 3x' },
    { state: true, text: 'Read for 1 hour' },
  ];
  tasks: { state: boolean; text: string }[] = this.rowData;
  inputValue: string = '';
  selectorState: number = 0; // 0 - All, 1 - Active, 2 - Completed
  counter: number = this.tasks.length;

  // INPUT FIELD
  // handle change in input field
  inputChanged(input: string) {
    this.inputValue = input;
  }

  // handle enter keydown in case of input field
  inputOnKeyDown(event: KeyboardEvent) {
    if (event.key == 'Enter' && this.inputValue != '') {
      this.tasks.push({ state: false, text: this.inputValue });
      this.inputValue = '';
    }
  }

  // MENU FUNCTIONS
  // handle selector clicks
  handleAllSelectorClick() {
    this.selectorState = 0; // all
    this.tasks = this.rowData;
    this.counter = this.tasks.length;
  }

  handleActiveSelectorClick() {
    this.selectorState = 1; // active
    this.tasks = this.rowData.filter((el) => {
      return !el.state;
    });
    this.counter = this.tasks.length;
  }

  handleCompletedSelectorClick() {
    this.selectorState = 2; // completed
    this.tasks = this.rowData.filter((el) => {
      return el.state;
    });
    this.counter = this.tasks.length;
  }

  // clear completed tasks
  handleClearCompletedTasks() {
    this.tasks = this.rowData.filter((el) => {
      return !el.state;
    });
  }
}
