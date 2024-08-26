import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { By } from '@angular/platform-browser';
import { QuoteContentComponent } from './components/quote-content/quote-content.component';
import { LoaderComponent } from './components/loader/loader.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NavbarComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'playground' title`, () => {
    expect(component.title).toEqual('playground');
  });

  it('should render the app-navbar component', () => {
    const navbar = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(navbar).toBeTruthy();
  });

  it('should render the app-quote-content component', () => {
    const quoteContent = fixture.debugElement.query(
      By.directive(QuoteContentComponent)
    );
    expect(quoteContent).toBeTruthy();
  });

  it('should render the app-loader component if isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loaderComponent = fixture.debugElement.query(
      By.directive(LoaderComponent)
    );
    expect(loaderComponent).toBeTruthy();
  });

  it('should not render the app-loader component if isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const loaderElement = fixture.debugElement.query(
      By.directive(LoaderComponent)
    );
    expect(loaderElement).toBeFalsy();
  });

  it('should render the app-quote-content component if isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const quoteContent = fixture.debugElement.query(
      By.directive(QuoteContentComponent)
    );
    expect(quoteContent).toBeTruthy();
  });

  it('should have isLoading set to false initially', () => {
    expect(component.isLoading).toBeFalse();
  });

  it('should initialize currentQuotes as an empty array', () => {
    expect(component.currentQuotes).toEqual([]);
  });
});
