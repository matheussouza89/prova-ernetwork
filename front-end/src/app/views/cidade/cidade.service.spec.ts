import { TestBed } from '@angular/core/testing';

import { CidadeService } from './cidade.service';

describe('CadastroService', () => {
  let service: CidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});