export interface School {
  id: string;
  name: string;
  address: string;
  nearestStation: string;
  hensachi: number;
  gender: 'coed' | 'boys' | 'girls';
  tuition: number;
  lat: number;
  lng: number;
}
