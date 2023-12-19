import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: itemName });
    setItemName('');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
