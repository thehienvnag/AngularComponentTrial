import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnCarouselComponent } from './baitap-vn-carousel.component';

describe('BaitapVnCarouselComponent', () => {
  let component: BaitapVnCarouselComponent;
  let fixture: ComponentFixture<BaitapVnCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
