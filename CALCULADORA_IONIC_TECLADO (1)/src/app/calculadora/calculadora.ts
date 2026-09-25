import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, IonContent],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  pantalla: string = '0';
  historial: string[] = [];

  private valorAnterior: number | null = null;
  private operador: string | null = null;
  private esperandoNuevoNumero: boolean = false;

  presionarDigito(digito: string) {
    if (this.esperandoNuevoNumero || this.pantalla === '0') {
      this.pantalla = digito;
      this.esperandoNuevoNumero = false;
    } else {
      this.pantalla += digito;
    }
  }

  presionarPunto() {
    if (this.esperandoNuevoNumero) {
      this.pantalla = '0.';
      this.esperandoNuevoNumero = false;
      return;
    }
    if (!this.pantalla.includes('.')) {
      this.pantalla += '.';
    }
  }

  presionarOperador(op: string) {
    const actual = parseFloat(this.pantalla);

    if (this.operador && !this.esperandoNuevoNumero) {
      this.calcular();
      this.valorAnterior = parseFloat(this.pantalla);
    } else {
      this.valorAnterior = actual;
    }

    this.operador = op;
    this.esperandoNuevoNumero = true;
  }

  presionarIgual() {
    if (this.operador === null || this.valorAnterior === null) {
      return;
    }
    this.calcular();
    this.operador = null;
    this.esperandoNuevoNumero = true;
  }

  private calcular() {
    if (this.valorAnterior === null || this.operador === null) {
      return;
    }

    const actual = parseFloat(this.pantalla);
    let resultado = 0;

    switch (this.operador) {
      case '+':
        resultado = this.valorAnterior + actual;
        break;
      case '-':
        resultado = this.valorAnterior - actual;
        break;
      case '*':
        resultado = this.valorAnterior * actual;
        break;
      case '/':
        resultado = actual !== 0 ? this.valorAnterior / actual : 0;
        break;
      default:
        resultado = actual;
    }

    const textoOperacion = `${this.valorAnterior} ${this.operador} ${actual} = ${resultado}`;
    this.historial.unshift(textoOperacion);

    resultado = Math.round(resultado * 1000000) / 1000000;
    this.pantalla = resultado.toString();
    this.valorAnterior = resultado;
  }

  presionarCambiarSigno() {
    if (this.pantalla !== '0') {
      this.pantalla = this.pantalla.startsWith('-')
        ? this.pantalla.slice(1)
        : '-' + this.pantalla;
    }
  }

  presionarPorcentaje() {
    const actual = parseFloat(this.pantalla);
    this.pantalla = (actual / 100).toString();
  }

  limpiar() {
    this.pantalla = '0';
    this.valorAnterior = null;
    this.operador = null;
    this.esperandoNuevoNumero = false;
  }

  borrarHistorial() {
    this.historial = [];
  }
}
