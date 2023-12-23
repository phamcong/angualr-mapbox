import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface MapDisplayOption {
  styleURL: string;
  datasetId: string;
  datasetURL: string;
}

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrl: './map-panel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MapPanelComponent {
  @Input() option!: MapDisplayOption;
}
