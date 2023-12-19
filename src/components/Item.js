import React from 'react';
import { Link } from 'react-router-dom';

const Item= ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
