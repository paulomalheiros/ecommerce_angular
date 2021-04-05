import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaDeComprasComponent } from './cesta-de-compras.component';

describe('CestaDeComprasComponent', () => {
  let component: CestaDeComprasComponent;
  let fixture: ComponentFixture<CestaDeComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestaDeComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
