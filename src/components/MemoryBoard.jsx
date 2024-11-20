import React, { useState } from 'react'
import images from './Images';
import './MemoryBoard.css';

const MemoryBoard = () => {
  const [cards, setCards] = useState([...images, ...images]);
  return (
    <div>
      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer">
            <div className="card">
              <div className="front">
                <img src={card} alt="" />
              </div>
              <div className="back"></div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default MemoryBoard

