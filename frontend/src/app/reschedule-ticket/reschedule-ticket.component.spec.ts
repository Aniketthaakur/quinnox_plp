import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleTicketComponent } from './reschedule-ticket.component';

describe('RescheduleTicketComponent', () => {
  let component: RescheduleTicketComponent;
  let fixture: ComponentFixture<RescheduleTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduleTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
