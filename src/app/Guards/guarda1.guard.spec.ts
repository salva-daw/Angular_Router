import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guarda1Guard } from './guarda1.guard';

describe('guarda1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guarda1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
