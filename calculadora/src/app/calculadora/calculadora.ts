import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  num1: number = 0;
  num2: number = 0;
  operador: string = '+';
  resultado: number = 0;
  historial: string[] = [];

  operar() {
    switch (this.operador) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num2 !== 0 ? this.num1 / this.num2 : 0;
        break;
      case '^':
        this.resultado = Math.pow(this.num1, this.num2);
        break;
      default:
        this.resultado = 0;
    }

    const operacion = `${this.num1} ${this.operador} ${this.num2} = ${this.resultado}`;
    this.historial.unshift(operacion);
  }

  borrarHistorial() {
    this.historial = [];
  }
}