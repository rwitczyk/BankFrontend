import {TestBed} from '@angular/core/testing';

import {ListOfTransfersService} from './list-of-transfers.service';

describe('ListOfTransfersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfTransfersService = TestBed.get(ListOfTransfersService);
    expect(service).toBeTruthy();
  });
});
