import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnPromotionComponent } from './baitap-vn-promotion.component';

describe('BaitapVnPromotionComponent', () => {
  let component: BaitapVnPromotionComponent;
  let fixture: ComponentFixture<BaitapVnPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
