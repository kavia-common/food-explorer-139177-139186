import React from 'react';

/**
 * FoodCard renders a product card with image, title and rating.
 * PUBLIC_INTERFACE
 */
export default function FoodCard({
  classRoot = 'group-1-78',
  rectClass = 'rect-1-79',
  favIconClass = 'icon-1-80',
  titleClass = 'text-1-81',
  shadowClass = 'ellipse-1-82',
  imageClass = 'img-1-83',
  ratingGroupClass = 'group-1-84',
  ratingIconClass = 'icon-1-85',
  ratingTextClass = 'text-1-86',
  title = '',
  rating = '',
  imageSrc = '', // Prefer absolute public path: "/assets/figmaimages/<file>.png" or pass an imported image from src/assets
  onClick = () => {}
}) {
  return (
    <div className={`abs ${classRoot}`} onClick={onClick} role="button" aria-label={`Open details for ${title}`}>
      <div className={`abs ${rectClass}`}></div>
      <div className={`abs ${favIconClass}`} aria-hidden="true"></div>
      <div className={`abs ${titleClass}`} dangerouslySetInnerHTML={{ __html: title }} />
      <div className={`abs ${shadowClass}`}></div>
      {imageSrc ? <img className={`abs ${imageClass}`} src={imageSrc} alt="" /> : null}
      <div className={`abs ${ratingGroupClass}`}>
        <div className={`abs ${ratingIconClass}`} aria-hidden="true"></div>
        <div className={`abs ${ratingTextClass}`}>{rating}</div>
      </div>
    </div>
  );
}
