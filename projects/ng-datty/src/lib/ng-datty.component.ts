import { Component, input, model } from '@angular/core';

@Component({
  selector: 'dt-counter',
  template: `
    <span>{{ hello() }}</span>
    <button (click)="decrement()">-</button>
    <span>Current Count: {{ counter() }}</span>
    <button (click)="increment()">+</button>
  `,
})
export class CounterComponent {
  counter = model(0);
  hello = input('Hi');

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
