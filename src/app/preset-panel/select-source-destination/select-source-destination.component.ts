import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { AssignUserGroup, DataType, MapType } from "../types/map-preset.types";
import { PresetPanelService } from "../preset-panel.service";
import { orderBy } from "lodash";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from "primeng/inputtext";
import { RadioButtonModule } from "primeng/radiobutton";

@Component({
  selector: 'app-select-source-destination',
  templateUrl: './select-source-destination.component.html',
  styleUrl: './select-source-destination.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    RadioButtonModule,
  ],
})
export class SelectSourceDestinationComponent implements OnInit {
  sourceAndDestinationForm!: FormGroup;
  assignedUserGroupList = [
    { label: AssignUserGroup.ALL, value: AssignUserGroup.ALL },
  ]

  @Output() onChange = new EventEmitter<any>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly presetPanelService: PresetPanelService
  ) {
    this.sourceAndDestinationForm = this.fb.group({
      mapName: new FormControl(DataType.CAR),
      mapType: new FormControl(),
      assignUserGroup: new FormControl(AssignUserGroup.ALL),
      isPrivateMap: new FormControl(false),
      isPermanentMap: new FormControl(true),
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.onChange.emit({
      ...this.sourceAndDestinationForm.value
    })
  }
}
