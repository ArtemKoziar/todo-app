import { TestBed } from '@angular/core/testing';

import { ViewBoardService } from './view-board.service';

describe('ViewBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewBoardService = TestBed.get(ViewBoardService);
    expect(service).toBeTruthy();
  });
});
