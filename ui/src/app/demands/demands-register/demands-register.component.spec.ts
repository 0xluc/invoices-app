import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesRegisterComponent } from './demands-register.component';

describe('InvoicesRegisterComponent', () => {
  let component: InvoicesRegisterComponent;
  let fixture: ComponentFixture<InvoicesRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesRegisterComponent]
    });
    fixture = TestBed.createComponent(InvoicesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
