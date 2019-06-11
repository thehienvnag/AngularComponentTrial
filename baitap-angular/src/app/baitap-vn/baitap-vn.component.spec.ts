import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapVnComponent } from './baitap-vn.component';

describe('BaitapVnComponent', () => {
  let component: BaitapVnComponent;
  let fixture: ComponentFixture<BaitapVnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapVnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
