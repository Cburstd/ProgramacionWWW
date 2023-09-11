import React, { useState } from 'react';
import Card from './cards_catalog';

function CardList({ cards }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCards = filterCategory === 'all'
    ? cards
    : cards.filter(card => card.category === filterCategory);

  const handleFilter = category => {
    setFilterCategory(category);
  };

  return (
    <div className="container">
      <div className="row" id="cards-container">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
