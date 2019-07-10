import {TestBed} from '@angular/core/testing';

import {CreateTransferService} from './create-transfer.service';

describe('CreateTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTransferService = TestBed.get(CreateTransferService);
    expect(service).toBeTruthy();
  });
});
