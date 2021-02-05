import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/state';

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default function Cards({ cardsPool }) {
  const [cards, setCards] = useState(() => {
    shuffle(cardsPool);
    return cardsPool;
  });

  const [dealerCount, setDealerCount] = useState(0);

  const {playerCards, setPlayerCards} = useContext(AppContext);

  useEffect(() => {
    if (dealerCount > 4) {
      shuffle(cardsPool);
      setCards(cardsPool);
      setDealerCount(0);
      setPlayerCards([]);
    }
  });

  const removeCard = card => {
    setPlayerCards([...playerCards, card.target.src]);
    const clonedCards = [...cards];
    clonedCards.splice(card.target.id, 1);
    setCards(clonedCards);
    setDealerCount(dealerCount + 1);
  };

  return (
    <>
      {cards.map((card, index) => (
        <img id={index} src={card.url} key={index} onClick={removeCard}/>
      ))}
    </>
  )
}