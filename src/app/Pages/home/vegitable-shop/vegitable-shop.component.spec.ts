import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitableShopComponent } from './vegitable-shop.component';

describe('VegitableShopComponent', () => {
  let component: VegitableShopComponent;
  let fixture: ComponentFixture<VegitableShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegitableShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegitableShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
