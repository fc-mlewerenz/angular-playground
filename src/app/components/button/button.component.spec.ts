import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon with the correct class when an icon class is provided', () => {
    component.icon = 'icon';
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.classList).toContain('icon');
  });

  it('should not display the icon when icon is not provided', () => {
    component.icon = undefined;
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement).toBeFalsy();
  });
});
