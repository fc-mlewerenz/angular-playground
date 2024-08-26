import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteContentComponent } from './quote-content.component';
import { Quote } from '../../model/quote.model';
import { Direction } from '../../types/type.model';
import { By } from '@angular/platform-browser';

describe('QuoteContentComponent', () => {
  let component: QuoteContentComponent;
  let fixture: ComponentFixture<QuoteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the correct class based on characterDirection', () => {
    const testQuote: Quote = {
      character: 'Homer',
      quote: 'Doh!',
      image: 'assets/homer.png',
      characterDirection: Direction.Left,
    };

    component.fetchedApiRes = [testQuote];
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.container'));
    expect(container.nativeElement.classList).toContain('left-layout');
  });
});
