import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Field', () => {
    let inputElement: DebugElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.query(By.css('input#calculatorValue'));
    });

    it('should be empty', () => {
      //Assert
      expect(inputElement.nativeElement.value).toBe('')
    })

    it('should set the input field value to "5" when the "5" button is clicked', () => {
      // Arrange
      const number5Btn = fixture.debugElement.query(By.css('#number5Button'));

      // Act
      number5Btn.nativeElement.click();
      fixture.detectChanges();

      // Assert
      expect(inputElement.nativeElement.value).toBe('5');
    });

    it('should clear the input field on "AC" button click', () => {
      // Arrange
      component.currentValue = '123';
      const acButton = fixture.debugElement.query(By.css('#clearButton'));

      // Act
      acButton.nativeElement.click();
      fixture.detectChanges();

      // Assert
      expect(component.currentValue).toBe('');
    });
  })

  describe('Calculation', () => {
    let inputElement: DebugElement;
    let calculateBtn: DebugElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.query(By.css('input#calculatorValue'));
      calculateBtn = fixture.debugElement.query(By.css('button#calculateButton'));
    });

    it('should calculate 10 / 2 to 5', () => {
      // Arrange
      const number1Btn = fixture.debugElement.query(By.css('#number1Button'));
      const number0Btn = fixture.debugElement.query(By.css('#number0Button'));
      const divisionBtn = fixture.debugElement.query(By.css('#divisionButton'));
      const number2Btn = fixture.debugElement.query(By.css('#number2Button'));

      // Act
      number1Btn.nativeElement.click();
      number0Btn.nativeElement.click();
      divisionBtn.nativeElement.click();
      number2Btn.nativeElement.click();
      calculateBtn.nativeElement.click()
      fixture.detectChanges();


      // Assert
      expect(inputElement.nativeElement.value).toBe('5')
    })

    it('should calculate 4 * (2+2) to 16', () => {
      // Arrange
      const number4Btn = fixture.debugElement.query(By.css('#number4Button'));
      const multiplyBtn = fixture.debugElement.query(By.css('#multiplyButton'));
      const parenthesesBtn = fixture.debugElement.query(By.css('#parenthesesButton'));
      const additionBtn = fixture.debugElement.query(By.css('#additionButton'));
      const number2Btn = fixture.debugElement.query(By.css('#number2Button'));

      // Act
      number4Btn.nativeElement.click();
      multiplyBtn.nativeElement.click();
      parenthesesBtn.nativeElement.click();
      number2Btn.nativeElement.click();
      additionBtn.nativeElement.click();
      number2Btn.nativeElement.click();
      parenthesesBtn.nativeElement.click();
      calculateBtn.nativeElement.click()
      fixture.detectChanges();

      // Assert
      expect(inputElement.nativeElement.value).toBe('16')
    })
  })
});
