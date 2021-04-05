import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoClienteComponent } from './acesso-cliente.component';

describe('AcessoClienteComponent', () => {
  let component: AcessoClienteComponent;
  let fixture: ComponentFixture<AcessoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
