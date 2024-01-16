import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { DataType, MapType, ShipmentMode } from "../types/map-preset.types";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { RadioButtonModule } from "primeng/radiobutton";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-basic-map-detail',
  templateUrl: './basic-map-detail.component.html',
  styleUrl: './basic-map-detail.component.scss',
  standalone: true,
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
  ],
})
export class BasicMapDetailComponent implements OnInit {
  presetForm!: FormGroup;
  dataTypeOptions: SelectItem[] = [
    { label: 'Car', value: 'car' },
    { label: 'Train', value: 'train' },
  ]
  mapTypeOptions: SelectItem[] = [
    { label: MapType.FLOW, value: MapType.FLOW },
    { label: MapType.PIE, value: MapType.PIE },
    { label: MapType.COMBINATION, value: MapType.COMBINATION },
    { label: MapType.DATA_FLOW, value: MapType.DATA_FLOW },
  ]

  @Output() onChange = new EventEmitter<any>();

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.presetForm = this.fb.group({
      fromDate: new FormControl<Date | null>(null),
      endDate: new FormControl<Date | null>(null),
      shipmentMode: new FormControl<ShipmentMode>(ShipmentMode.START_DATE),
      dataType: new FormControl<DataType>(DataType.CAR),
      mapType: new FormControl<MapType>(MapType.FLOW),
    })
  }

  ngOnInit(): void {}

  onNext(): void {
    this.onChange.emit(this.presetForm.value);
  }

  protected readonly ShipmentMode = ShipmentMode;
}
