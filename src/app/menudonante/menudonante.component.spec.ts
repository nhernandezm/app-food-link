import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudonanteComponent } from './menudonante.component';

describe('MenudonanteComponent', () => {
  let component: MenudonanteComponent;
  let fixture: ComponentFixture<MenudonanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenudonanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenudonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
