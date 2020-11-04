import { TestBed } from '@angular/core/testing';

import { LaunchServicesService } from './launch-services.service';

describe('LaunchServicesService', () => {
  let service: LaunchServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
