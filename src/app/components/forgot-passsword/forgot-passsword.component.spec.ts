import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassswordComponent } from './forgot-passsword.component';

describe('ForgotPassswordComponent', () => {
  let component: ForgotPassswordComponent;
  let fixture: ComponentFixture<ForgotPassswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPassswordComponent]
    });
    fixture = TestBed.createComponent(ForgotPassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
