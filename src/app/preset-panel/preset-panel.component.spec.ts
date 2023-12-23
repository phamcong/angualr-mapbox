import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetPanelComponent } from './preset-panel.component';

describe('PresetPanelComponent', () => {
  let component: PresetPanelComponent;
  let fixture: ComponentFixture<PresetPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresetPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
