import React from 'react';

/**
 * FavoritesSidebar shows selected favorites list (placeholder layout).
 * PUBLIC_INTERFACE
 */
export default function FavoritesSidebar({ favorites = [] }) {
  if (!favorites.length) return null;
  return (
    <aside
      aria-label="Favorites"
      style={{
        position: 'fixed',
        right: 12,
        top: 12,
        width: 220,
        maxHeight: '80vh',
        overflow: 'auto',
        background: '#ffffff',
        borderRadius: 12,
        boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
        padding: 12,
        zIndex: 500
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Favorites</div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {favorites.map((f) => (
          <li key={f.id} style={{ fontSize: 14, padding: '6px 0', borderBottom: '1px solid #f3f4f6' }}>
            <span dangerouslySetInnerHTML={{ __html: f.title }} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
