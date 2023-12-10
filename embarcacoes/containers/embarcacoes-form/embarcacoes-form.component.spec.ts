import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcacoesFormComponent } from './embarcacoes-form.component';

describe('EmbarcacoesFormComponent', () => {
  let component: EmbarcacoesFormComponent;
  let fixture: ComponentFixture<EmbarcacoesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbarcacoesFormComponent]
    });
    fixture = TestBed.createComponent(EmbarcacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
