import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./mycomponents/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  title = 'Developer';
  

  constructor() {
  // setTimeout(() => {
  //   this.title = "Engineer";
  // }, 2000);
}

}
