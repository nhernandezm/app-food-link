import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerdonacionComponent } from './hacerdonacion.component';

describe('HacerdonacionComponent', () => {
  let component: HacerdonacionComponent;
  let fixture: ComponentFixture<HacerdonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HacerdonacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HacerdonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
