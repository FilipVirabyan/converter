import {Component, OnInit} from '@angular/core';
import {CounterService} from './core/services/counter.service';
import {CurrencyModel} from './core/models/allCurrencies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public countries: Array<CurrencyModel> = [];

  constructor(private exchangeService: CounterService) {
  }

  public currencyValue: number = 0;

  public getCurrency(event) {
    if (event.target.value.length === 0) {
      this.currencyValue = 0;
    } else {
      this.currencyValue = parseInt(event.target.value);
    }
  }

  ngOnInit() {
    this.countries = this.exchangeService.getCountriesInArr();
  }
}
