import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allCurrency = 'https://api.exchangeratesapi.io/latest?base=';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private router: Router,
    platformLocation: PlatformLocation) {
  }

  public get(type) {
    return this.httpClient.get(this.allCurrency+type).pipe(
      retry(1), // retry a failed request up to 1 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    var msg = [];
    if (error.error instanceof ErrorEvent) {
      msg.push({ field: '', msg: error.error.message });
    } else {
      msg.push({ field: "Status", msg: error.status })
      for (var name in error.error) {
        msg.push({ field: name, msg: error.error[name] });
      }
    }
    return throwError(msg);
  };
}
