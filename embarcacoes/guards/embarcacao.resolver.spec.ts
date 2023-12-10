import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { embarcacaoResolver } from './embarcacao.resolver';

describe('embarcacaoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => embarcacaoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
