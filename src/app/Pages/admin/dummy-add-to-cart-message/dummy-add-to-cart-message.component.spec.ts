import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyAddToCartMessageComponent } from './dummy-add-to-cart-message.component';

describe('DummyAddToCartMessageComponent', () => {
  let component: DummyAddToCartMessageComponent;
  let fixture: ComponentFixture<DummyAddToCartMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyAddToCartMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyAddToCartMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
