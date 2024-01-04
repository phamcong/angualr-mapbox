import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { PresetPanelComponent } from "./preset-panel/preset-panel.component";
import { MapPanelComponent } from "./map-panel/map-panel.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";
import { PanelModule } from "primeng/panel";
import { AccordionModule } from "primeng/accordion";

enum TOKEN {
  Priya = 'pk.eyJ1IjoicHJpeWFkaGFyc2hpbmlwIiwiYSI6ImNsb3p3ajJiZzAzeXMycW80bjB1YTgyaGIifQ.xbQPH_XoltuOhT9tGbNXMQ',
  Priyanka = 'pk.eyJ1IjoicHJpeWFua2EtMjEiLCJhIjoiY2t2MnB4N2E3Mng3YjMwbXBjcGxqYmhtdSJ9.OWbVbrYCGJ6QtSsaKODcJA'
}

@NgModule({
  declarations: [
    AppComponent,
    MapPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PresetPanelComponent,
    HeaderComponent,
    NgxMapboxGLModule.withConfig({
      accessToken: TOKEN.Priya
    }),
    PanelModule,
    AccordionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
