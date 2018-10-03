import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { SelectCardDirective } from './directives/select-card.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyCardComponent, SelectCardDirective],
  exports: [CurrencyCardComponent, SelectCardDirective]
})
export class SharedModule { }
