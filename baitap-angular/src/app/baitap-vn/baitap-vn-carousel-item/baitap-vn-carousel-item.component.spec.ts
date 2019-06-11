import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnCarouselItemComponent } from './baitap-vn-carousel-item.component';

describe('BaitapVnCarouselItemComponent', () => {
  let component: BaitapVnCarouselItemComponent;
  let fixture: ComponentFixture<BaitapVnCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
