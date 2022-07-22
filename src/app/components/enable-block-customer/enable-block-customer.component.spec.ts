import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableBlockCustomerComponent } from './enable-block-customer.component';

describe('EnableBlockCustomerComponent', () => {
  let component: EnableBlockCustomerComponent;
  let fixture: ComponentFixture<EnableBlockCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableBlockCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableBlockCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
