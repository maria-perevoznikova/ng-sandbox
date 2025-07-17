import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentParams, InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  private investmentResultsService = inject(InvestmentResultsService);
  params = input.required<InvestmentParams>();

  getAnnualData() {
    return this.investmentResultsService.getInvestmentResults(this.params());
  }
}
