import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Item = ({ items, handleAddItem, handleDeleteItem }) => {
  return (
    <div>
      <Form handleAddItem={handleAddItem} />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>{item.name} <button onClick={() => handleDeleteItem(item.id)}>Delete</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
