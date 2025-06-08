import React from 'react';
import { SearchFilters, SchoolType } from '../../types/school';

interface SearchFilterProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  wards: string[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  filters,
  onFiltersChange,
  wards
}) => {
  const schoolTypes: (SchoolType | '')[] = ['', '共学', '男子校', '女子校'];

  const handleInputChange = (field: keyof SearchFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [field]: value
    });
  };

  const handleRangeChange = (
    field: 'deviationValueRange' | 'annualFeeRange',
    index: 0 | 1,
    value: number
  ) => {
    const newRange = [...filters[field]] as [number, number];
    newRange[index] = value;
    onFiltersChange({
      ...filters,
      [field]: newRange
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">検索・フィルター</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          学校名検索
        </label>
        <input
          type="text"
          value={filters.searchTerm}
          onChange={(e) => handleInputChange('searchTerm', e.target.value)}
          placeholder="学校名を入力..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          区域
        </label>
        <select
          value={filters.ward}
          onChange={(e) => handleInputChange('ward', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">すべての区域</option>
          {wards.map((ward) => (
            <option key={ward} value={ward}>
              {ward}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          学校種別
        </label>
        <select
          value={filters.schoolType}
          onChange={(e) => handleInputChange('schoolType', e.target.value as SchoolType | '')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">すべて</option>
          {schoolTypes.slice(1).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          偏差値範囲: {filters.deviationValueRange[0]} - {filters.deviationValueRange[1]}
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="range"
            min="40"
            max="80"
            value={filters.deviationValueRange[0]}
            onChange={(e) => handleRangeChange('deviationValueRange', 0, parseInt(e.target.value))}
            className="flex-1"
          />
          <input
            type="range"
            min="40"
            max="80"
            value={filters.deviationValueRange[1]}
            onChange={(e) => handleRangeChange('deviationValueRange', 1, parseInt(e.target.value))}
            className="flex-1"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>40</span>
          <span>80</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          年間学費範囲: ¥{filters.annualFeeRange[0].toLocaleString()} - ¥{filters.annualFeeRange[1].toLocaleString()}
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="range"
            min="500000"
            max="1200000"
            step="50000"
            value={filters.annualFeeRange[0]}
            onChange={(e) => handleRangeChange('annualFeeRange', 0, parseInt(e.target.value))}
            className="flex-1"
          />
          <input
            type="range"
            min="500000"
            max="1200000"
            step="50000"
            value={filters.annualFeeRange[1]}
            onChange={(e) => handleRangeChange('annualFeeRange', 1, parseInt(e.target.value))}
            className="flex-1"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>¥500,000</span>
          <span>¥1,200,000</span>
        </div>
      </div>

      <button
        onClick={() => onFiltersChange({
          searchTerm: '',
          ward: '',
          schoolType: '',
          deviationValueRange: [40, 80],
          annualFeeRange: [500000, 1200000]
        })}
        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
      >
        フィルターをリセット
      </button>
    </div>
  );
};

export default SearchFilter;