import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestuComponent } from './vestu.component';

describe('VestuComponent', () => {
  let component: VestuComponent;
  let fixture: ComponentFixture<VestuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestuComponent]
    });
    fixture = TestBed.createComponent(VestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
