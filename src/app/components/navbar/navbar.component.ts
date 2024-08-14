import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from '../button/button.component';
import { SimpsonsService } from '../../service/simpsons.service';
import { Quote } from '../../model/quote.model';
import { SliderComponent } from '../slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    ButtonComponent,
    SliderComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() fetchedApiRes!: Quote[];
  @Output() fetchedApiResChange = new EventEmitter<Quote[]>();

  @Input() isLoading!: boolean;
  @Output() isLoadingChange = new EventEmitter<boolean>();

  sliderValue: number = 1;

  constructor(private simpsonsService: SimpsonsService) {}

  onSliderChange(value: number): void {
    this.sliderValue = value;
  }

  handleButtonClick = (): void => {
    this.isLoading = true;
    this.isLoadingChange.emit(this.isLoading);

    this.simpsonsService
      .getQuotes(this.sliderValue)
      .subscribe((apiRes: Quote[]) => {
        this.fetchedApiRes = apiRes;
        this.fetchedApiResChange.emit(this.fetchedApiRes);
        this.isLoading = false;
        this.isLoadingChange.emit(this.isLoading);
      });
  };
}
