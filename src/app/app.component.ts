import {Component} from '@angular/core';
import {MapDisplayOption} from "./map-panel/map-panel.component";
import {MainPageSteps} from "./app.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-mapbox';
  mapDisplayOption!: MapDisplayOption;
  MainPageSteps = MainPageSteps;
  currentStep = MainPageSteps.BasicMapDetail;

  goToNextStep(e: any) {
    this.mapDisplayOption = e;
    this.currentStep = MainPageSteps.SelectSourceAndDestination;
  }
}
