import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from "primeng/accordion";
import { MapBuildStep } from "../app.constant";
import { MapDisplayOption } from "../map-panel/map-panel.component";
import { BasicMapDetailComponent } from "./basic-map-detail/basic-map-detail.component";
import { SelectSourceDestinationComponent } from "./select-source-destination/select-source-destination.component";

@Component({
  selector: 'app-preset-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    AccordionModule,
    BasicMapDetailComponent,
    SelectSourceDestinationComponent,
  ],
  templateUrl: './preset-panel.component.html',
  styleUrl: './preset-panel.component.scss'
})
export class PresetPanelComponent {
  currentStep = MapBuildStep.BasicMapDetail;
  MapBuildStep = MapBuildStep;
  @Output()
  mapDisplayOptionChange: EventEmitter<MapDisplayOption> = new EventEmitter<MapDisplayOption>();

  goToNextStep(e: any, currentStep: MapBuildStep) {
    this.currentStep = currentStep;
    if (currentStep === MapBuildStep.SelectSourceAndDestination) {
      this.mapDisplayOptionChange.emit(e);
    }
  }
}
