import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiKey = '6ad2757f0b7cbe38f6a54ec4'; // Ваш API ключ
  private apiUrl = 'https://v6.exchangerate-api.com/v6/';

  constructor(private http: HttpClient) { }

  getExchangeRates(baseCurrency: string): Observable<any> {
    const url = `${this.apiUrl}${this.apiKey}/latest/${baseCurrency}`;
    console.log('Запрос к API:', url);
    return this.http.get(url);
  }
}