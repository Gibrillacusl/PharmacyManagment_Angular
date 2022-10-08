/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicineService } from './medicine.service';

describe('Service: Medicine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineService]
    });
  });

  it('should ...', inject([MedicineService], (service: MedicineService) => {
    expect(service).toBeTruthy();
  }));
});
