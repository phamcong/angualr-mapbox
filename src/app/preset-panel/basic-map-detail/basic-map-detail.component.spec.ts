import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMapDetailComponent } from './basic-map-detail.component';

describe('MapPanelComponent', () => {
  let component: BasicMapDetailComponent;
  let fixture: ComponentFixture<BasicMapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicMapDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
