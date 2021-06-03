import { TestBed } from '@angular/core/testing';

import { CognitiveService } from './cognitive.service';

describe('CognitiveService', () => {
  let service: CognitiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
