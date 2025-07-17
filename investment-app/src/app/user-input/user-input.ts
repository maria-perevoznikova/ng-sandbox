import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentParams } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal(10000);
  annualInvestment = signal(100);
  expectedReturn = signal(6);
  duration = signal(10);
  calculate = output<InvestmentParams>();

  onCalculate() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
