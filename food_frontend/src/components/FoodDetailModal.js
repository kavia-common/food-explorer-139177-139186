import React from 'react';

/**
 * FoodDetailModal shows details of a selected food.
 * PUBLIC_INTERFACE
 */
export default function FoodDetailModal({ open = false, item = null, onClose = () => {} }) {
  if (!open || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${item.title?.replace(/<br>/g, ' ')}`}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 360,
          maxWidth: '90%',
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          padding: 24,
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            border: 'none',
            background: 'transparent',
            fontSize: 20,
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        <div
          dangerouslySetInnerHTML={{ __html: `<h3 style="margin:0 0 8px 0; font-family: Inter, system-ui">${item.title}</h3>` }}
        />
        <div style={{ color: '#6b7280', marginBottom: 12 }}>Rating: {item.rating}</div>
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt=""
            style={{ width: '100%', height: 180, objectFit: 'contain', background: '#f9fafb', borderRadius: 12 }}
          />
        ) : null}
        <p style={{ marginTop: 14, color: '#374151' }}>
          Delicious choice! This is a placeholder modal ready for integration with real data.
        </p>
      </div>
    </div>
  );
}
