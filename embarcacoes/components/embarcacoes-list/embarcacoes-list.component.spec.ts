import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcacoesListComponent } from './embarcacoes-list.component';

describe('EmbarcacoesListComponent', () => {
  let component: EmbarcacoesListComponent;
  let fixture: ComponentFixture<EmbarcacoesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbarcacoesListComponent]
    });
    fixture = TestBed.createComponent(EmbarcacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
