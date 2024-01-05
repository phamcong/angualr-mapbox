import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { DataType, MapType } from "../types/map-preset.types";
import { PresetPanelService } from "../preset-panel.service";
import { orderBy } from "lodash";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: 'app-basic-map-detail',
  templateUrl: './basic-map-detail.component.html',
  styleUrl: './basic-map-detail.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
  ],
})
export class BasicMapDetailComponent implements OnInit {
  presetForm!: FormGroup;
  dataTypeOptions: SelectItem[] = [
    { label: 'Car', value: 'car' },
    { label: 'Train', value: 'train' },
  ]
  mapTypeOptions: SelectItem[] = [
    { label: MapType.FLOW_MAP, value: MapType.FLOW_MAP },
    { label: MapType.FLOW_CAR_MAP, value: MapType.FLOW_CAR_MAP },
    { label: MapType.COMBINATION_MAP, value: MapType.COMBINATION_MAP },
  ]
  styleOptions: SelectItem[] = []

  @Output() onChange = new EventEmitter<any>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly presetPanelService: PresetPanelService
  ) {
    this.presetForm = this.fb.group({
      dataType: new FormControl<DataType>(DataType.CAR),
      mapType: new FormControl<MapType>(MapType.FLOW_MAP),
      dateRange: new FormControl<Date[]>([]),
      styleURL: new FormControl<string | null>(null),
    })
  }

  ngOnInit(): void {
    this.presetPanelService.getStyles().subscribe(styles => {
      this.styleOptions = orderBy(styles, 'styleName').map(style => ({
        label: style.styleName,
        value: style.styleURL
      }))
    })
  }

  submit(): void {
    this.onChange.emit({
      styleURL: this.presetForm.value.styleURL,
      datasetId: 'railroutes',
      datasetURL: 'assets/data/sample-dataset.json'
    })
  }
}
