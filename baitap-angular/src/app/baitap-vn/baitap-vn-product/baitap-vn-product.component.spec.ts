import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnProductComponent } from './baitap-vn-product.component';

describe('BaitapVnProductComponent', () => {
  let component: BaitapVnProductComponent;
  let fixture: ComponentFixture<BaitapVnProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
