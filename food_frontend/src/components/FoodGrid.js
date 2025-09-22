import React from 'react';
import FoodCard from './FoodCard';

/**
 * FoodGrid showing the four static cards in absolute layout.
 * PUBLIC_INTERFACE
 */
export default function FoodGrid({ items = [], onSelect = () => {} }) {
  // Map specific layout classes to items to preserve pixel positions
  const layoutPresets = [
    {
      classRoot: 'group-1-78',
      rectClass: 'rect-1-79',
      favIconClass: 'icon-1-80',
      titleClass: 'text-1-81',
      shadowClass: 'ellipse-1-82',
      imageClass: 'img-1-83',
      ratingGroupClass: 'group-1-84',
      ratingIconClass: 'icon-1-85',
      ratingTextClass: 'text-1-86',
    },
    {
      classRoot: 'group-1-87',
      rectClass: 'rect-1-88',
      favIconClass: 'icon-1-89',
      titleClass: 'text-1-90',
      shadowClass: 'ellipse-1-91',
      imageClass: 'img-1-92',
      ratingGroupClass: 'group-1-93',
      ratingIconClass: 'icon-1-94',
      ratingTextClass: 'text-1-95',
    },
    {
      classRoot: 'group-1-96',
      rectClass: 'rect-1-97',
      favIconClass: 'icon-1-98',
      titleClass: 'text-1-99',
      shadowClass: 'ellipse-1-100',
      imageClass: 'img-1-101',
      ratingGroupClass: 'group-1-102',
      ratingIconClass: 'icon-1-103',
      ratingTextClass: 'text-1-104',
    },
    {
      classRoot: 'group-1-105',
      rectClass: 'rect-1-106',
      favIconClass: 'icon-1-107',
      titleClass: 'text-1-108',
      shadowClass: 'ellipse-1-109',
      imageClass: 'img-1-110',
      ratingGroupClass: 'group-1-111',
      ratingIconClass: 'icon-1-112',
      ratingTextClass: 'text-1-113',
    }
  ];

  return (
    <div className="abs group-1-77">
      {items.slice(0, 4).map((item, idx) => (
        <FoodCard
          key={item.id || idx}
          {...layoutPresets[idx]}
          title={item.title}
          rating={item.rating}
          imageSrc={item.imageSrc}
          onClick={() => onSelect(item)}
        />
      ))}
      {/* Floating circular action from the original layout */}
      <div className="abs group-1-127" role="button" aria-label="Floating Action">
        <div className="abs ellipse-1-128"></div>
        <div className="abs group-1-129">
          <div className="abs line-1-130"></div>
          <div className="abs line-1-131"></div>
        </div>
      </div>
    </div>
  );
}
