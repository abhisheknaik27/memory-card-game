import React, { useState } from 'react'
import images from './Images';
import './MemoryBoard.css';
import { shuffle } from 'lodash';

const MemoryBoard = () => {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [clicks, setClicks] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [won, setWon] = useState(false);

  function flipCards(index){
    if(won){
      setCards(shuffle([...images, ...images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if(activeCards.length == 0){
      setActiveCards([index]);
    }
    if(activeCards.length == 1){
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if(cards[firstIndex] === cards[secondIndex]){
        setFoundPairs( [...foundPairs, firstIndex, secondIndex] );
        if(foundPairs.length + 2 === cards.length){
          setWon(true);
        }
      }
      setActiveCards([...activeCards, index]);
    }
    if(activeCards.length == 2){
      setActiveCards([index]);
    }
    setClicks(clicks+1);
  }
  return (
    <div>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
          return(
            <div 
            className={"card-outer " + (flippedToFront ? "flipped" : '')}  
            onClick={() => flipCards(index)}>
            <div className="card">
              <div className="front">
                <img src={card} alt="" />
              </div>
              <div className="back" />
            </div>
          </div>
        );
        })}
        
      </div>
      <div className="stats">
        {won && (
          <>Congrats You Won The Game </>
        )}
        Clicks: {clicks} &nbsp; Found Pairs: {foundPairs.length/2}
      </div>
    </div>
  )
}

export default MemoryBoard

