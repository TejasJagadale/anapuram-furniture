import React from 'react';
import Counter from './Counter';

const STAT_ITEMS = [
  { end: 30, suffix: '+', label: 'Years Experience' },
  { end: 1000, suffix: '+', label: 'Happy Customers' },
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 100, suffix: '%', label: 'Quality Wood' },
];

export default function Stats() {
  return (
    <div className="stats">
      {STAT_ITEMS.map((item) => (
        <div className="stat-item" key={item.label}>
          <div className="stat-item__number">
            <Counter end={item.end} suffix={item.suffix} />
          </div>
          <div className="stat-item__label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
