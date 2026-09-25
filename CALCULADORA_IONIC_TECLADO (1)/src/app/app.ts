import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { Calculadora } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonApp, Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GorinBross');
}
