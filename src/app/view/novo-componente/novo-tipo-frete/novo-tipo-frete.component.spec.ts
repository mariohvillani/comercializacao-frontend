import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTipoFreteComponent } from './novo-tipo-frete.component';

describe('NovoTipoFreteComponent', () => {
  let component: NovoTipoFreteComponent;
  let fixture: ComponentFixture<NovoTipoFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTipoFreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTipoFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
