import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnProductsComponent } from './baitap-vn-products.component';

describe('BaitapVnProductsComponent', () => {
  let component: BaitapVnProductsComponent;
  let fixture: ComponentFixture<BaitapVnProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
