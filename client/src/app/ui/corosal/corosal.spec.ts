import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corosal } from './corosal';

describe('Corosal', () => {
  let component: Corosal;
  let fixture: ComponentFixture<Corosal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corosal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corosal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
