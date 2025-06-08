import React from 'react';
import { School } from '../../types/school';

interface SchoolCardProps {
  school: School;
  onClose?: () => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school, onClose }) => {
  const getSchoolTypeColor = (type: string) => {
    switch (type) {
      case '共学':
        return 'bg-blue-100 text-blue-800';
      case '男子校':
        return 'bg-green-100 text-green-800';
      case '女子校':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-800">{school.name}</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSchoolTypeColor(school.schoolType)}`}>
            {school.schoolType}
          </span>
          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
            偏差値 {school.deviationValue}
          </span>
        </div>

        <div className="text-sm text-gray-600">
          <p><span className="font-semibold">住所:</span> {school.address}</p>
          <p><span className="font-semibold">最寄り駅:</span> {school.nearestStation} (徒歩{school.walkingTime}分)</p>
          <p><span className="font-semibold">年間学費:</span> ¥{school.annualFee.toLocaleString()}</p>
          {school.established && (
            <p><span className="font-semibold">創立:</span> {school.established}年</p>
          )}
          {school.studentCount && (
            <p><span className="font-semibold">生徒数:</span> {school.studentCount}名</p>
          )}
        </div>

        {school.description && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">学校概要</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{school.description}</p>
          </div>
        )}

        {school.features && school.features.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">特色・特徴</h3>
            <div className="flex flex-wrap gap-1">
              {school.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {school.website && (
          <div className="mt-4">
            <a
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition duration-200 text-sm"
            >
              公式サイト
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolCard;