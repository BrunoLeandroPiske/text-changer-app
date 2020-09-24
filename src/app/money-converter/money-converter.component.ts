import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  currency_dict = {};

  currencys: Array<Object> = [
    {key: 'USD', name: 'US Dollar'},
    {key: 'JPY', name: 'Japanese yen'},
    {key: 'BGN', name: 'Bulgarian lev'},
    {key: 'CZK', name: 'Czech koruna'},
    {key: 'DKK', name: 'Danish krone'},
    {key: 'GBP', name: 'Pound sterling'},
    {key: 'HUF', name: 'Hungarian forint'},
    {key: 'PLN', name: 'Polish zloty'},
    {key: 'RON', name: 'Romanian leu'},
    {key: 'SEK', name: 'Swedish krona'},
    {key: 'CHF', name: 'Swiss franc'},
    {key: 'EUR', name: 'Euro'},
    {key: 'ISK', name: 'Icelandic krona'},
    {key: 'NOK', name: 'Norwegian krone'},
    {key: 'HRK', name: 'Croatian kuna'},
    {key: 'RUB', name: 'Russian rouble'},
    {key: 'TRY', name: 'Turkish lira'},
    {key: 'AUD', name: 'Australian dollar'},
    {key: 'BRL', name: 'Brazilian real'},
    {key: 'CAD', name: 'Canadian dollar'},
    {key: 'CNY', name: 'Chinese yuan renminbi'},
    {key: 'HKD', name: 'Hong Kong dollar'},
    {key: 'IDR', name: 'Indonesian rupiah'},
    {key: 'ILS', name: 'Israeli shekel'},
    {key: 'INR', name: 'Indian rupee'},
    {key: 'KRW', name: 'South Korean won'},
    {key: 'MXN', name: 'Mexican peso'},
    {key: 'MYR', name: 'Malaysian ringgit'},
    {key: 'NZD', name: 'New Zealand dollar'},
    {key: 'PHP', name: 'Philippine peso'},
    {key: 'SGD', name: 'Singapore dollar'},
    {key: 'THB', name: 'Thai baht'},
    {key: 'ZAR', name: 'South African rand'}
  ]

  option1 = 'USD';
  value1 = '1';
  option2 = 'EUR';
  value2 = '0';

  ngOnInit(): void {
    this.getCurrency(this.option1);
  }

  getCurrency(value) {
    this.apiService.get(value).subscribe(data => {this.currency_dict = data});
    this.onChangeOption2();
  }

  onChangeOption1() {
    this.getCurrency(this.option1);
  }

  onChangeOption2() {
    if (Number(this.value1)) {
      this.value2 = this.value1;
    }
  }

}
