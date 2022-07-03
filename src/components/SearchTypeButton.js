import React from 'react';
import * as HIcons from '@heroicons/react/outline';

function SearchTypeButton({ iconName, label, active }) {
  const { ...icons } = HIcons;
  const activeColor = active ? 'text-blue-500' : 'text-gray-500';
  const activeBorder = active ? 'border-b-4 border-blue-600' : '';
  const SelectedIcon = icons[iconName];
  return (
    <button
      className={`${activeBorder} ${activeColor} flex items-center space-x-1 pb-2`}
    >
      <SelectedIcon className="h-4 w-4" />
      <span className="">{label}</span>
    </button>
  );
}

export default SearchTypeButton;
