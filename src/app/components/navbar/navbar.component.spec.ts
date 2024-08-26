import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { ButtonComponent } from '../button/button.component';
import { SliderComponent } from '../slider/slider.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SimpsonsService } from '../../service/simpsons.service';
import { Quote } from '../../model/quote.model';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let simpsonsService: jasmine.SpyObj<SimpsonsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SimpsonsService', ['getQuotes']);

    await TestBed.configureTestingModule({
      imports: [
        ButtonComponent,
        MatToolbarModule,
        NavbarComponent,
        SliderComponent,
      ],
      providers: [
        provideHttpClient(),
        { provide: SimpsonsService, useValue: spy },
      ],
    }).compileComponents();

    simpsonsService = TestBed.inject(
      SimpsonsService
    ) as jasmine.SpyObj<SimpsonsService>;
    simpsonsService.getQuotes.and.returnValue(of([]));
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-toolbar', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeTruthy();
  });

  it('should render the app-slider component', () => {
    const slider = fixture.debugElement.query(By.directive(SliderComponent));
    expect(slider).toBeTruthy();
  });

  it('should render the app-button component with correct text and icon inputs', () => {
    const button = fixture.debugElement.query(By.directive(ButtonComponent));
    expect(button).toBeTruthy();
    expect(button.componentInstance.text).toBe('Random Zitat');
    expect(button.componentInstance.icon).toBe('fa-solid fa-magnifying-glass');
  });

  it('should call handleButtonClick when the button is clicked', () => {
    spyOn(component, 'handleButtonClick');

    const buttonDe = fixture.debugElement.query(By.directive(ButtonComponent));
    buttonDe.triggerEventHandler('click', null);

    expect(component.handleButtonClick).toHaveBeenCalled();
  });

  it('should call onSliderChange and update sliderValue', () => {
    const newValue = 5;
    component.onSliderChange(newValue);
    expect(component.sliderValue).toBe(newValue);
  });

  it('should emit fetchedApiResChange when quotes are fetched', fakeAsync(() => {
    const mockQuotes: Quote[] = [
      {
        character: 'Homer',
        quote: 'Doh!',
        image: '',
        characterDirection: '',
      },
    ];
    simpsonsService.getQuotes.and.returnValue(of(mockQuotes));
    spyOn(component.fetchedApiResChange, 'emit');

    component.handleButtonClick();

    tick();

    expect(component.fetchedApiResChange.emit).toHaveBeenCalledWith(mockQuotes);
  }));
});
