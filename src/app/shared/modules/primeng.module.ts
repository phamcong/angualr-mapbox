import { PanelModule } from "primeng/panel";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { PaginatorModule } from "primeng/paginator";

const primengModules = [
  PanelModule,
  ButtonModule,
  CalendarModule,
  DropdownModule,
  PaginatorModule,
]

@NgModule({
  imports: [...primengModules],
  exports: [...primengModules],
})

export class PrimeNGModule {
}
