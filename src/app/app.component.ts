import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { Quote } from './model/quote.model';
import { QuoteContentComponent } from './components/quote-content/quote-content.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    ButtonComponent,
    QuoteContentComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';
  isLoading: boolean = false;
  currentQuotes: Quote[] = [];
}
