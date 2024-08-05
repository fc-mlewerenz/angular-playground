import { Component, Input, EventEmitter, Injectable, Output } from '@angular/core';
import { Quote } from '../../model/quote.model';
import { SimpsonsService } from '../../service/quote.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

@Injectable({ providedIn: 'root' })

export class ButtonComponent {
  @Input() text: string = "";

  constructor(private simpsonsService: SimpsonsService) {}

  onClick = () : void => {
    this.simpsonsService.getAllQuotes().subscribe((res: Quote[]) => {
      this.simpsonsService.setQuotes(res);
      }); 
  };
}
