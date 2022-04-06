import { TestBed } from '@angular/core/testing';

import { CommondatasharingService } from './commondatasharing.service';

describe('CommondatasharingService', () => {
  let service: CommondatasharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommondatasharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
