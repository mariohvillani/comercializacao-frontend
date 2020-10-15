import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaFinalidadeComponent } from './nova-finalidade.component';

describe('NovaFinalidadeComponent', () => {
  let component: NovaFinalidadeComponent;
  let fixture: ComponentFixture<NovaFinalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaFinalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaFinalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
