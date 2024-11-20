import React, { useState } from 'react'
import images from './Images';
import './MemoryBoard.css';
import { shuffle } from 'lodash';

const MemoryBoard = () => {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [clicks, setClick] = useState();
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);

  function flipCards(index){
    if(activeCards.length == 0){
      setActiveCards([index]);
    }
    if(activeCards.length == 1){
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if(cards[firstIndex] === cards[secondIndex]){
        setFoundPairs( [...foundPairs, firstIndex, secondIndex] );
      }
      setActiveCards([...activeCards, index]);
    }
    if(activeCards.length == 2){
      
      
      setActiveCards([index]);
    }
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
    </div>
  )
}

export default MemoryBoard

