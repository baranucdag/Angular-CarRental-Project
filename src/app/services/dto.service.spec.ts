import { TestBed } from '@angular/core/testing';

import { DtoService } from './dto.service';

describe('DtoService', () => {
  let service: DtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
