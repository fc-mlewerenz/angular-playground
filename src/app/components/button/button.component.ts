import { Component, Input, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../model/quote.model';
import { SimpsonsService } from '../../service/simpsons.service';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

@Injectable({ providedIn: 'root' })

export class ButtonComponent {
  @Input() text: string = "";
  @Input() icon!: IconDefinition;

  constructor(private simpsonsService: SimpsonsService) {}

  onClick = () : void => {
    console.log('Icon:', this.icon);
    this.simpsonsService.getAllQuotes().subscribe((res: Quote[]) => { 
      this.simpsonsService.setQuotes(res);
      }); 
  };
}
