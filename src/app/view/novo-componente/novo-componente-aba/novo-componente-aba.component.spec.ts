import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponenteAbaComponent } from './novo-componente-aba.component';

describe('NovoComponenteAbaComponent', () => {
  let component: NovoComponenteAbaComponent;
  let fixture: ComponentFixture<NovoComponenteAbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponenteAbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoComponenteAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
