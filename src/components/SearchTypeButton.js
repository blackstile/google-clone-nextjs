import React from 'react';
import * as HIcons from '@heroicons/react/outline';
import { useRouter } from 'next/router';
function SearchTypeButton({ iconName, label, active }) {
  const { ...icons } = HIcons;
  const color = active ? 'blue' : 'gray';
  const activeBorder = active ? 'border-b-4 border-blue-600' : '';
  const SelectedIcon = icons[iconName];
  const router = useRouter();
  const selectType = (label) => {
    const isImageButton = label && label.toLowerCase() === 'imagens';
    const searchType = isImageButton ? 'image' : '';
    router.push(`/search?term=${router.query.term}&searchType=${searchType}`);
  };
  return (
    <button
      className={`${activeBorder} text-${color}-500 flex items-center space-x-1 pb-2`}
      onClick={() => selectType(label)}
    >
      <SelectedIcon className="h-4 w-4" />
      <span className="">{label}</span>
    </button>
  );
}

export default SearchTypeButton;
