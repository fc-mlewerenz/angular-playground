import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule, MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  sliderValue: number = 1;
  @Output() sliderValueChanged = new EventEmitter<number>();

  onSliderChange(value: number): void {
    this.sliderValueChanged.emit(value);
  }
}
