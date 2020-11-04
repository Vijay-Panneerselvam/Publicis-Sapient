import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSummaryComponent } from './launch-summary.component';

describe('LaunchSummaryComponent', () => {
  let component: LaunchSummaryComponent;
  let fixture: ComponentFixture<LaunchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
