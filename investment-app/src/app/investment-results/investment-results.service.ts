import { Injectable } from '@angular/core';

export interface InvestmentParams {
  initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface AnnualInvestmentData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export interface InvestmentResults {
  annualData: AnnualInvestmentData[];
}

@Injectable({
  providedIn: 'root',
})
export class InvestmentResultsService {
  constructor() {}
  
  getInvestmentResults(params: InvestmentParams): InvestmentResults {
    const annualData = [];
    let investmentValue = params.initialInvestment;

    for (let i = 0; i < params.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (params.expectedReturn / 100);
      investmentValue += interestEarnedInYear + params.annualInvestment;
      const totalInterest = investmentValue - params.annualInvestment * year - params.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: params.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: params.initialInvestment + params.annualInvestment * year,
      });
    }
    return {annualData: annualData};
  }
}
