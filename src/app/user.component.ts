import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <p [style.background-color]="color">
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  colors = [ 'yellow', 'chartreuse', 'crimson' ];
  color = this.colors[0];

  randomizeColor() {
    this.color = this.colors[Math.floor(Math.random() * 3)];
  }
  constructor() { }

  ngOnInit() {
  }

}
