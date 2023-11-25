import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbsComponent } from './usbs.component';

describe('UsbsComponent', () => {
  let component: UsbsComponent;
  let fixture: ComponentFixture<UsbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
