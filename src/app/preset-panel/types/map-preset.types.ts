export enum DataType {
  CAR = 'CAR',
  TRAIN = 'TRAIN',
}

export enum MapType {
  FLOW_MAP = 'Flow map',
  FLOW_CAR_MAP = 'Flow car map',
  COMBINATION_MAP = 'Combination map'
}

export enum AssignUserGroup {
  ALL = 'All',
}

export interface MapPreset {
  dataType: DataType,
  mapType: MapType,
}
