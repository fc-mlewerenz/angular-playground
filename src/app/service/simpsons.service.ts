import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../model/quote.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://thesimpsonsquoteapi.glitch.me';

  getQuotes(num: number): Observable<Quote[]> {
    const countParam = num && num > 1 ? `?count=${num}` : ''; // check if num > 1
    const url = `${this.baseUrl}/quotes${countParam}`;
    return this.http.get<Quote[]>(url);
  }
}
