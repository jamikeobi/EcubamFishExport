import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagosListComponent } from './lagos-list.component';

describe('LagosListComponent', () => {
  let component: LagosListComponent;
  let fixture: ComponentFixture<LagosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LagosListComponent]
    });
    fixture = TestBed.createComponent(LagosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
