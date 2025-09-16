import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setQuantity(1);
    setDescription('');
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <input type='number' value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
      <input
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder='Item...'
      />
      <button type='submit'>Add</button>
    </form>
  );
}
