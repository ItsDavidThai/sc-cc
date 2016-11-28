/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiRequestsService } from './api-requests.service';

describe('ApiRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRequestsService]
    });
  });

  it('should ...', inject([ApiRequestsService], (service: ApiRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
