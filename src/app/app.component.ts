import { Component } from '@angular/core';
import { MapDisplayOption } from "./map-panel/map-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-mapbox';
  mapDisplayOption!: MapDisplayOption;
}
