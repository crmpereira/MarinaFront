import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { checklistResolver } from './checklist.resolver';


describe('checklistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => checklistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
