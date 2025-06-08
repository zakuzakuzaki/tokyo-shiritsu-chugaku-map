export type SchoolType = '共学' | '男子校' | '女子校';

export interface School {
  id: string;
  name: string;
  address: string;
  ward: string;
  latitude: number;
  longitude: number;
  nearestStation: string;
  walkingTime: number;
  schoolType: SchoolType;
  deviationValue: number;
  annualFee: number;
  description?: string;
  website?: string;
  established?: number;
  studentCount?: number;
  features?: string[];
}

export interface SearchFilters {
  searchTerm: string;
  ward: string;
  schoolType: SchoolType | '';
  deviationValueRange: [number, number];
  annualFeeRange: [number, number];
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}