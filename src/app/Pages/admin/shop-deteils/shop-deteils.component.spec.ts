import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDeteilsComponent } from './shop-deteils.component';

describe('ShopDeteilsComponent', () => {
  let component: ShopDeteilsComponent;
  let fixture: ComponentFixture<ShopDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDeteilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
