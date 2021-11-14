import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultComponent } from './default.component';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Dashboard'`, () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dashboard');
  });

  it('should render Dashboard', () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main h1')?.textContent).toContain(
      'Dashboard'
    );
  });

  it('should render current year', () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    const currentYear = new Date().getFullYear().toString();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer p')?.textContent).toContain(
      currentYear
    );
  });
});
