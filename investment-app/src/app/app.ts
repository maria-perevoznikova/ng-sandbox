import { Component } from '@angular/core';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentResults } from "./investment-results/investment-results";
import { InvestmentParams } from './investment-results/investment-results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, UserInput, InvestmentResults],
})
export class App {
  investmentParams?: InvestmentParams;

  onCalculateResults(params: InvestmentParams) {
    this.investmentParams = params;
    console.log('Calculation triggered');
  }
}
