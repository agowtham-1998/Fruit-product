import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemMangoComponent } from './product-item-mango.component';

describe('ProductItemMangoComponent', () => {
  let component: ProductItemMangoComponent;
  let fixture: ComponentFixture<ProductItemMangoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemMangoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemMangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
