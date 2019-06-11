import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnHeaderComponent } from './baitap-vn-header.component';

describe('BaitapVnHeaderComponent', () => {
  let component: BaitapVnHeaderComponent;
  let fixture: ComponentFixture<BaitapVnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
