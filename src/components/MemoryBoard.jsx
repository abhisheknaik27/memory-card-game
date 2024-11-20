import React, { useState } from 'react'
import images from './Images';
import './MemoryBoard.css';
import { shuffle } from 'lodash';

const MemoryBoard = () => {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [activeCards, setActiveCards] = useState();
  function flipCards(index){

  }
  return (
    <div>
      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer" onClick={() => flipCards(index)}>
            <div className="card">
              <div className="front">
                <img src={card} alt="" />
              </div>
              <div className="back" />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default MemoryBoard

