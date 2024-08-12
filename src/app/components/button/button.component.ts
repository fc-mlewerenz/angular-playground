import { Component, Input, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../model/quote.model';
import { SimpsonsService } from '../../service/simpsons.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon?: string;

  constructor(private simpsonsService: SimpsonsService) {}

  onClick = (): void => {
    this.simpsonsService.getAllQuotes().subscribe((res: Quote[]) => {
      this.simpsonsService.setQuotes(res);
    });
  };
}
