import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { clienteResolver } from './cliente.resolver';

describe('clienteResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => clienteResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
