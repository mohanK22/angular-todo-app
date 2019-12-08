import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Mohan';

  constructor() {
    console.log(`constructor called..... Hello ${this.name}`);
  }

  changeName(name: string): void {
    this.name = name;
  }

}
