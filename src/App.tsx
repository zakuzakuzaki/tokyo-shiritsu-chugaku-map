import { useState } from 'react';
import Map from './components/Map/Map';
import SearchFilter, { FilterValues } from './components/SearchFilter/SearchFilter';
import Header from './components/Header/Header';
import data from './data/schools.json';
import { School } from './types/school';

const schools: School[] = data as School[];

const defaultFilter: FilterValues = {
  name: '',
  gender: '',
  minHensachi: 0,
  maxHensachi: 100,
  minTuition: 0,
  maxTuition: 2000000,
};

function filterSchools(all: School[], f: FilterValues) {
  return all.filter((s) => {
    if (f.name && !s.name.includes(f.name)) return false;
    if (f.gender && s.gender !== f.gender) return false;
    if (s.hensachi < f.minHensachi || s.hensachi > f.maxHensachi) return false;
    if (s.tuition < f.minTuition || s.tuition > f.maxTuition) return false;
    return true;
  });
}

export default function App() {
  const [filters, setFilters] = useState<FilterValues>(defaultFilter);

  const filtered = filterSchools(schools, filters);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="md:w-60 bg-gray-100 overflow-y-auto">
          <SearchFilter values={filters} onChange={setFilters} />
        </div>
        <div className="flex-1">
          <Map schools={filtered} />
        </div>
      </div>
    </div>
  );
}
