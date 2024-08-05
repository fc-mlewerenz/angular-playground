import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { SimpsonsService } from './service/quote.service';

import { Quote } from './model/quote.model';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent, ButtonComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // template: `<app-home></app-home>`,
})
export class AppComponent {
  title = 'playground';
  constructor(public simpsonsService: SimpsonsService) {}

  currentQuotes: Quote[] = [];

  ngOnInit() {
    this.simpsonsService.quotes$.subscribe((quotes: Quote[]) => {
      this.currentQuotes = quotes;
    });
  }
}
