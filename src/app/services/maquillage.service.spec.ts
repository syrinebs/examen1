import { TestBed } from '@angular/core/testing';

import { MaquillageService } from './maquillage.service';

describe('MaquillageService', () => {
  let service: MaquillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
