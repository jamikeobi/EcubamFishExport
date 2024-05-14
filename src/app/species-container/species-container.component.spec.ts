import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesContainerComponent } from './species-container.component';

describe('SpeciesContainerComponent', () => {
  let component: SpeciesContainerComponent;
  let fixture: ComponentFixture<SpeciesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesContainerComponent]
    });
    fixture = TestBed.createComponent(SpeciesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
