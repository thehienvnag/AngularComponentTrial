import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnLaptopComponent } from './baitap-vn-laptop.component';

describe('BaitapVnLaptopComponent', () => {
  let component: BaitapVnLaptopComponent;
  let fixture: ComponentFixture<BaitapVnLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
