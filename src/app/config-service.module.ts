import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
@Injectable()
export class ConfigServiceModule {
  constructor(private http: HttpClient) { }

  allCurrency = 'https://api.exchangeratesapi.io/latest';

  getAllCurrency() {
    return this.http.get(this.allCurrency);
  }
 }
