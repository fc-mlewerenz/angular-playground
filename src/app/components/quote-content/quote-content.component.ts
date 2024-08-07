import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../model/quote.model';

@Component({
  selector: 'app-quote-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-content.component.html',
  styleUrl: './quote-content.component.scss'
})
export class QuoteContentComponent {
  @Input() quote?: Quote;
  @Input() isLoading?: boolean;

  layoutDirection: any;
}
