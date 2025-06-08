import React from 'react';

interface HeaderProps {
  filteredCount: number;
  totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ filteredCount, totalCount }) => {
  return (
    <header className="bg-primary-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              東京私立中学校マップ
            </h1>
            <p className="text-primary-100 mt-1">
              Tokyo Private Middle School Map
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <div className="bg-primary-700 rounded-lg px-4 py-2">
              <p className="text-sm">
                表示中: <span className="font-bold">{filteredCount}</span> / 
                全体: <span className="font-bold">{totalCount}</span> 校
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;