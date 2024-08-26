import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { By } from '@angular/platform-browser';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sliderValueChanged when slider value changes', () => {
    spyOn(component.sliderValueChanged, 'emit');

    component.sliderValue = 5;
    fixture.detectChanges();

    const sliderInput = fixture.debugElement.query(By.css('input'));
    sliderInput.nativeElement.value = 7;
    sliderInput.nativeElement.dispatchEvent(new Event('input'));

    expect(component.sliderValueChanged.emit).toHaveBeenCalledWith(7);
  });

  it('should update sliderValue on slider input change', () => {
    const sliderInput = fixture.debugElement.query(By.css('input'));
    sliderInput.nativeElement.value = 8;
    sliderInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.sliderValue).toBe(8);
  });

  it('should display the correct slider value in the label', () => {
    component.sliderValue = 3;
    fixture.detectChanges();

    const label = fixture.debugElement.query(
      By.css('.example-value-label')
    ).nativeElement;
    expect(label.textContent).toContain('3');
  });
});
