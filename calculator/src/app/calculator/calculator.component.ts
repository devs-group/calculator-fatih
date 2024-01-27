import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  currentValue: string = '';
  calculated: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  clearValue() {
    this.currentValue = ''
  }
  addNumber(number: string) {
    this.currentValue = this.calculated ? number : this.currentValue.concat(number);
    this.calculated = false;
  }

  addOperator(operator: string) {
    if (operator === '()') {
      this.currentValue = this.currentValue.concat(this.currentValue.indexOf('(') === -1 ? '(' :')')
    } else {
      this.currentValue = this.currentValue.concat(` ${operator} `)
    }
  }

  calculate() {
    this.currentValue = eval(this.currentValue).toString()
    this.calculated = true
  }


}
