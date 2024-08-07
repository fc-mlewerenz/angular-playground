import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteContentComponent } from './quote-content.component';

describe('QuoteContentComponent', () => {
  let component: QuoteContentComponent;
  let fixture: ComponentFixture<QuoteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
