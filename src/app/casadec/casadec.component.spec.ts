import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadecComponent } from './casadec.component';

describe('CasadecComponent', () => {
  let component: CasadecComponent;
  let fixture: ComponentFixture<CasadecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasadecComponent]
    });
    fixture = TestBed.createComponent(CasadecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
