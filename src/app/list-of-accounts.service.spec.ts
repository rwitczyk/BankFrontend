import {TestBed} from '@angular/core/testing';

import {ListOfAccountsService} from './list-of-accounts.service';

describe('ListOfAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfAccountsService = TestBed.get(ListOfAccountsService);
    expect(service).toBeTruthy();
  });
});
