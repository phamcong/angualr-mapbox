import { NgModule } from "@angular/core";
import { BasicMapDetailComponent } from "./basic-map-detail/basic-map-detail.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PresetPanelComponent } from "./preset-panel.component";
import { PrimeNGModule } from "../shared/modules/primeng.module";
import { SelectSourceDestinationComponent } from "./select-source-destination/select-source-destination.component";

@NgModule({
  imports: [
    PrimeNGModule,
    ReactiveFormsModule,
    BasicMapDetailComponent,
    SelectSourceDestinationComponent,
    PresetPanelComponent
  ],
  exports: [
    PresetPanelComponent
  ]
})
export class PresentPanelModule {
}
