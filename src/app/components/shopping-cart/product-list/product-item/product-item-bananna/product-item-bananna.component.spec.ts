import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemBanannaComponent } from './product-item-bananna.component';

describe('ProductItemBanannaComponent', () => {
  let component: ProductItemBanannaComponent;
  let fixture: ComponentFixture<ProductItemBanannaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemBanannaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemBanannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
