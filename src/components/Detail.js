import React from 'react';

const Detail = ({ item }) => {
  return (
    <div>
      <h2>Item Detail</h2>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
    </div>
  );
};

export default Detail;
