import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../model/quote.model';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { faNeuter } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })

export class SimpsonsService {
  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://thesimpsonsquoteapi.glitch.me';

  private quotesSubject = new BehaviorSubject<Quote[]>([]); // Observable quotesSubject mit leerem Array
  quotes$: Observable<Quote[]> = this.quotesSubject.asObservable();
  
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  getAllQuotes(): Observable<Quote[]> {
    this.isLoadingSubject.next(true);
    return this.http.get<Quote[]>(`${this.apiUrl}/quotes`).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    ); 
  }

  setQuotes(quotes: Quote[]): void {
    this.quotesSubject.next(quotes);
  }
}
