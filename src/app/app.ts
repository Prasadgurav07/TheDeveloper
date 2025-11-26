import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./mycomponents/home/home";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],   // ⬅ Add both components here
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  


}