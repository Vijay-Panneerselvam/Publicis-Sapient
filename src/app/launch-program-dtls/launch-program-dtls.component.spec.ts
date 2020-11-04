import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramDtlsComponent } from './launch-program-dtls.component';

describe('LaunchProgramDtlsComponent', () => {
  let component: LaunchProgramDtlsComponent;
  let fixture: ComponentFixture<LaunchProgramDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
