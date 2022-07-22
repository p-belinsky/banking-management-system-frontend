import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransactionsByAccountNumberComponent } from './search-transactions-by-account-number.component';

describe('SearchTransactionsByAccountNumberComponent', () => {
  let component: SearchTransactionsByAccountNumberComponent;
  let fixture: ComponentFixture<SearchTransactionsByAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTransactionsByAccountNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTransactionsByAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
