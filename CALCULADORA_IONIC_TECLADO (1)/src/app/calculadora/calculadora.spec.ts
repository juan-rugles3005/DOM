import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculadora } from './calculadora';

describe('Calculadora', () => {
  let component: Calculadora;
  let fixture: ComponentFixture<Calculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculadora]
    }).compileComponents();

    fixture = TestBed.createComponent(Calculadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum two numbers', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.operador = '+';
    component.operar();
    expect(component.resultado).toBe(5);
  });
});
