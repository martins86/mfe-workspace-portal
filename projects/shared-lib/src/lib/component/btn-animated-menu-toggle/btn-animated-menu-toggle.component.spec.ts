import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAnimatedMenuToggleComponent } from './btn-animated-menu-toggle.component';

describe('BtnAnimatedMenuToggleComponent', () => {
  let component: BtnAnimatedMenuToggleComponent;
  let fixture: ComponentFixture<BtnAnimatedMenuToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnAnimatedMenuToggleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAnimatedMenuToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
