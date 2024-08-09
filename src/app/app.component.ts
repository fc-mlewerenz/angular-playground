import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { SimpsonsService } from './service/simpsons.service';
import { Quote } from './model/quote.model';
import { QuoteContentComponent } from './components/quote-content/quote-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ButtonComponent,
    QuoteContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';
  isLoading: boolean = false;
  currentQuotes: Quote[] = [];

  constructor(public simpsonsService: SimpsonsService) {}

  ngOnInit() {
    this.simpsonsService.quotes$.subscribe((quotes: Quote[]) => {
      this.currentQuotes = quotes;
    });

    this.simpsonsService.isLoading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }
}
