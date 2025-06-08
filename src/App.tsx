import React, { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import SchoolMap from './components/Map/SchoolMap';
import SearchFilter from './components/SearchFilter/SearchFilter';
import SchoolCard from './components/SchoolCard/SchoolCard';
import { School, SearchFilters } from './types/school';
import schoolsData from './data/schools.json';
import './index.css';

const App: React.FC = () => {
  const [schools] = useState<School[]>(schoolsData as School[]);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: '',
    ward: '',
    schoolType: '',
    deviationValueRange: [40, 80],
    annualFeeRange: [500000, 1200000]
  });

  const wards = useMemo(() => {
    const uniqueWards = Array.from(new Set(schools.map(school => school.ward)));
    return uniqueWards.sort();
  }, [schools]);

  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      if (filters.searchTerm && !school.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      
      if (filters.ward && school.ward !== filters.ward) {
        return false;
      }
      
      if (filters.schoolType && school.schoolType !== filters.schoolType) {
        return false;
      }
      
      if (school.deviationValue < filters.deviationValueRange[0] || 
          school.deviationValue > filters.deviationValueRange[1]) {
        return false;
      }
      
      if (school.annualFee < filters.annualFeeRange[0] || 
          school.annualFee > filters.annualFeeRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [schools, filters]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        filteredCount={filteredSchools.length}
        totalCount={schools.length}
      />
      
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="lg:w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <SearchFilter
              filters={filters}
              onFiltersChange={setFilters}
              wards={wards}
            />
          </div>
          
          {selectedSchool && (
            <div className="p-4 border-t border-gray-200">
              <SchoolCard
                school={selectedSchool}
                onClose={() => setSelectedSchool(null)}
              />
            </div>
          )}
        </div>
        
        <div className="flex-1 h-96 lg:h-auto">
          <SchoolMap
            schools={filteredSchools}
            onSchoolSelect={setSelectedSchool}
          />
        </div>
      </div>
    </div>
  );
};

export default App;