import React from 'react';

/**
 * Categories row rendered to match absolute layout.
 * PUBLIC_INTERFACE
 */
export default function Categories({ categories = ['All', 'Combos', 'Sliders', 'Classic'], active = 'All', onSelect = () => {} }) {
  return (
    <div className="abs frame-1-63">
      <div className="abs frame-1-64">
        <div className="abs group-1-65" onClick={() => onSelect(categories[0])} role="button" aria-label={`Category ${categories[0]}`}>
          <div className="abs rect-1-66" style={{ opacity: active === categories[0] ? 1 : 0.5 }}></div>
          <div className="abs text-1-67">{categories[0]}</div>
        </div>
        <div className="abs group-1-68" onClick={() => onSelect(categories[1])} role="button" aria-label={`Category ${categories[1]}`}>
          <div className="abs rect-1-69"></div>
          <div className="abs text-1-70">{categories[1]}</div>
        </div>
        <div className="abs group-1-71" onClick={() => onSelect(categories[2])} role="button" aria-label={`Category ${categories[2]}`}>
          <div className="abs rect-1-72"></div>
          <div className="abs text-1-73">{categories[2]}</div>
        </div>
        <div className="abs group-1-74" onClick={() => onSelect(categories[3])} role="button" aria-label={`Category ${categories[3]}`}>
          <div className="abs rect-1-75"></div>
          <div className="abs text-1-76">{categories[3]}</div>
        </div>
      </div>
    </div>
  );
}
