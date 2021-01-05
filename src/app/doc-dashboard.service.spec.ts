import { TestBed } from '@angular/core/testing';

import { DocDashboardService } from './doc-dashboard.service';

describe('DocDashboardService', () => {
  let service: DocDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
