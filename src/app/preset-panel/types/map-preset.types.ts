export enum DataType {
  CAR = 'CAR',
  TRAIN = 'TRAIN',
}

export enum MapType {
  FLOW = 'Flow',
  PIE = 'Pie',
  COMBINATION = 'Combination',
  DATA_FLOW = 'Data flow',
}

export enum ShipmentMode {
  START_DATE = 'Start date',
  END_DATE = 'End date'
}

export interface CreateMapOptions {
  fromDate?: Date,
  endDate?: Date,
  shipmentMode: ShipmentMode,

}
export enum AssignUserGroup {
  ALL = 'All',
}

export interface MapPreset {
  dataType: DataType,
  mapType: MapType,
}
