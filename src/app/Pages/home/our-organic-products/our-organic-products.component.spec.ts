import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOrganicProductsComponent } from './our-organic-products.component';

describe('OurOrganicProductsComponent', () => {
  let component: OurOrganicProductsComponent;
  let fixture: ComponentFixture<OurOrganicProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurOrganicProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOrganicProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
