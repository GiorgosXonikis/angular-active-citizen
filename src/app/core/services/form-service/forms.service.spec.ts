import { TestBed } from '@angular/core/testing';

import { FormsService } from './form.service';

describe('FormService', () => {
  let service: FormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
