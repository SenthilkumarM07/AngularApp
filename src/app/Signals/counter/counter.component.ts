import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 count =signal(0);

 doubleCount:Signal <number>=computed(() => this.count() *2)


 increment()
 {
  this.count.set(this.count()+1)
 }
}
