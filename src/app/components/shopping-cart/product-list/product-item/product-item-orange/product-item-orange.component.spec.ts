import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemOrangeComponent } from './product-item-orange.component';

describe('ProductItemOrangeComponent', () => {
  let component: ProductItemOrangeComponent;
  let fixture: ComponentFixture<ProductItemOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
