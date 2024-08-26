import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { provideHttpClient } from '@angular/common/http';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main content container', () => {
    const contentDiv = compiled.querySelector('.content');
    expect(contentDiv).toBeTruthy();
  });

  it('should have a container with the loading class', () => {
    const containerDiv = compiled.querySelector('.container.loading');
    expect(containerDiv).toBeTruthy();
  });

  it('should render the quoteContainer', () => {
    const quoteContainerDiv = compiled.querySelector('.quoteContainer');
    expect(quoteContainerDiv).toBeTruthy();
  });

  it('should render the image with the correct src and alt attributes', () => {
    const img = compiled.querySelector('img.donut');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('assets/donut.svg');
    expect(img?.getAttribute('alt')).toBe('loading-image');
  });

  it('should render the loading text with dots', () => {
    const loadingText = compiled.querySelector('.loading-text');
    const dots = compiled.querySelector('.loading-text .dots');

    expect(loadingText).toBeTruthy();
    expect(loadingText?.textContent).toContain('Loading');
    expect(dots).toBeTruthy();
  });
});
