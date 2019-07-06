import { TestBed } from '@angular/core/testing';

import { Scenario7serviceService } from './scenario7service.service';

describe('Scenario7serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Scenario7serviceService = TestBed.get(Scenario7serviceService);
    expect(service).toBeTruthy();
  });
});
