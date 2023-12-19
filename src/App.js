
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Item from './src/components/Item';
import Detail from './src/components/Detail';
import Form from './src/components/Form';
  
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const saveItemsToLocalStorage = (newItems) => {
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleAddItem = (newItem) => {
    const newItems = [...items, { ...newItem, id: Date.now() }];
    saveItemsToLocalStorage(newItems);
  };

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    saveItemsToLocalStorage(newItems);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/items/:id">
            <Detail item={handleDeleteItem} />
          </Route>
          <Route path="/items">
            <Item items={items} />
           < Form onSubmit={handleAddItem} />
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
