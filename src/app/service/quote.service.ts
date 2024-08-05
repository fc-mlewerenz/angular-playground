import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../model/quote.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://thesimpsonsquoteapi.glitch.me';

  private quotesSubject = new BehaviorSubject<Quote[]>([]);
  quotes$: Observable<Quote[]> = this.quotesSubject.asObservable();

  setQuotes(quotes: Quote[]): void {
    this.quotesSubject.next(quotes);
  }

  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl + '/quotes');
  }
}
