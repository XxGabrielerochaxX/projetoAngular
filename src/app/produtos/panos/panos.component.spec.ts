import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanosComponent } from './panos.component';

describe('PanosComponent', () => {
  let component: PanosComponent;
  let fixture: ComponentFixture<PanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanosComponent]
    });
    fixture = TestBed.createComponent(PanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
