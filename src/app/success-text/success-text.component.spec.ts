import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTextComponent } from './success-text.component';

describe('SuccessTextComponent', () => {
  let component: SuccessTextComponent;
  let fixture: ComponentFixture<SuccessTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
