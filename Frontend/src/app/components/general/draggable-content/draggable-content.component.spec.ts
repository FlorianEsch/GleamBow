import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableContentComponent } from './draggable-content.component';

describe('DraggableContentComponent', () => {
  let component: DraggableContentComponent;
  let fixture: ComponentFixture<DraggableContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableContentComponent]
    });
    fixture = TestBed.createComponent(DraggableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
