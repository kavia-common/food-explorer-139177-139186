import React from 'react';

/**
 * SearchBar component with placeholder text and filter button.
 * PUBLIC_INTERFACE
 */
export default function SearchBar({ placeholder = 'Search', onFilterClick = () => {}, onClick = () => {} }) {
  return (
    <div className="abs group-1-55">
      <div className="abs rect-1-56" role="button" tabIndex={0} aria-label="Search" onClick={onClick}></div>
      <div className="abs group-1-57">
        <div className="abs rect-1-58"></div>
        <div className="abs icon-1-59" aria-hidden="true" onClick={onFilterClick}></div>
      </div>
      <div className="abs group-1-60">
        <div className="abs icon-1-61" aria-hidden="true"></div>
        <div className="abs text-1-62">{placeholder}</div>
      </div>
    </div>
  );
}
