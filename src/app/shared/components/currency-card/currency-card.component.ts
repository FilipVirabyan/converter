import {Component, Input, OnInit} from '@angular/core';
import {CurrencyModel} from '../../../core/models/allCurrencies.model';
import {CounterService} from '../../../core/services/counter.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {
  public clicked = 0;
  public firstCountryName = null;
  public secondCountryName = null;
  @Input()
  public country: CurrencyModel;
  @Input()
  public money: number;

  public selectedCurrenc:CurrencyModel;

  constructor(private counterService: CounterService) {
  }

  public getCurrency(): number {
    return parseFloat(this.counterService.convertMoneyByAm(this.money, this.country.currency).toFixed(2));
  }

  ngOnInit() {
  }

}
