import { TestBed } from '@angular/core/testing';

import { EmbarcacoesService } from './embarcacoes.service';

describe('EmbarcacoesService', () => {
  let service: EmbarcacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbarcacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
