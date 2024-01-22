import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSourceDestinationComponent } from './select-source-destination.component';

describe('MapPanelComponent', () => {
  let component: SelectSourceDestinationComponent;
  let fixture: ComponentFixture<SelectSourceDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSourceDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSourceDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
