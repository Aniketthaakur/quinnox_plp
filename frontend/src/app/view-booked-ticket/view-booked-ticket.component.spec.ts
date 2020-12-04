import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedTicketComponent } from './view-booked-ticket.component';

describe('ViewBookedTicketComponent', () => {
  let component: ViewBookedTicketComponent;
  let fixture: ComponentFixture<ViewBookedTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookedTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
