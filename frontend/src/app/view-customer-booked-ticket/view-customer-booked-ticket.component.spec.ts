import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerBookedTicketComponent } from './view-customer-booked-ticket.component';

describe('ViewCustomerBookedTicketComponent', () => {
  let component: ViewCustomerBookedTicketComponent;
  let fixture: ComponentFixture<ViewCustomerBookedTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerBookedTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerBookedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
