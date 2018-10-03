import {Injectable} from '@angular/core';
import {AllCurrenciesModel, CurrencyModel} from '../models/allCurrencies.model';

@Injectable()
export class CounterService {
  public currency: AllCurrenciesModel = {
    dolar: {
      symbol: '$',
      buy: 482,
      sell: 485,
      image: 'usa.png',
      countryName: 'USA',
      currency: 'dolar'
    },
    euro: {
      symbol: '€',
      buy: 563,
      sell: 567,
      image: 'euro.png',
      countryName: 'Europe',
      currency: 'euro'
    },
    pound: {
      symbol: '£',
      buy: 636,
      sell: 640,
      image: 'uk.png',
      countryName: 'UK',
      currency: 'pound'
    },
    ruble: {
      symbol: '₽',
      buy: 7.23,
      sell: 7.32,
      image: 'russia.png',
      countryName: 'Russia',
      currency: 'ruble'
    },
  };

  public getCountriesInArr(): Array<CurrencyModel> {
    let countries: Array<CurrencyModel> = [];

    for (let cur in this.currency) {
      if (this.currency.hasOwnProperty(cur)) {
        countries.push(this.currency[cur]);
      }
    }
    return countries;
  }

  public convertMoneyByAm(money: number, currency: string): number {
    return money * this.currency[currency].buy;
  }

  constructor() {
  }
}
