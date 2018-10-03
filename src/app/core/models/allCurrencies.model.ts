export interface AllCurrenciesModel {
  dolar: CurrencyModel;
  euro: CurrencyModel;
  pound: CurrencyModel;
  ruble: CurrencyModel;
}

export interface CurrencyModel {
  symbol: string;
  buy: number;
  sell: number;
  image: string;
  countryName: string;
  currency: string;
}
