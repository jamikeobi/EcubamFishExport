import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongoListComponent } from './congo-list.component';

describe('CongoListComponent', () => {
  let component: CongoListComponent;
  let fixture: ComponentFixture<CongoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongoListComponent]
    });
    fixture = TestBed.createComponent(CongoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
