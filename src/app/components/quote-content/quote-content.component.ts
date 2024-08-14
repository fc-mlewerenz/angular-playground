import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Direction } from '../../types/type.model';
import { Quote } from '../../model/quote.model';
@Component({
  selector: 'app-quote-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-content.component.html',
  styleUrl: './quote-content.component.scss',
})
export class QuoteContentComponent {
  @Input() fetchedApiRes: Quote[] = [];
  layoutDirection = Direction;
}
