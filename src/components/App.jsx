import { useState } from 'react';

import Form from './Form';
import Header from './Header';
import PackingList from './PackingLIst';
import Stat from './Stat';

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = item => setItems([...items, item]);

  const handleDeleteItem = id => setItems(items.filter(item => item.id !== id));

  const handleToggleItem = id =>
    setItems(items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));

  const handleClearList = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete all items?');
    isConfirmed && setItems([]);
  };

  return (
    <div className='app'>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleleItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stat items={items} />
    </div>
  );
}
