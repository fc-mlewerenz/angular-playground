import { Component, Input, Injectable } from '@angular/core';
import { Quote } from '../../model/quote.model';
import { SimpsonsService } from '../../service/simpsons.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

@Injectable({ providedIn: 'root' })

export class ButtonComponent {
  @Input() text: string = "";
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private simpsonsService: SimpsonsService) {}

  onClick = () : void => {
    this.simpsonsService.getAllQuotes().subscribe((res: Quote[]) => { 
      this.simpsonsService.setQuotes(res); // Ergebnis aus Api Call
      }); 
  };
}
