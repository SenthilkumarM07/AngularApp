import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  userName:string ='';
  isSubscribed:boolean =false;
  favoriteColor:string ='red';
  colors:string[]=['Red', 'Blue', 'Green'];
}
