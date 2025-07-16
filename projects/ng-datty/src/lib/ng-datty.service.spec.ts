import { TestBed } from '@angular/core/testing';

import { NgDattyService } from './ng-datty.service';

describe('NgDattyService', () => {
  let service: NgDattyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDattyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
