import React, { useState } from 'react';
import styled from 'styled-components';

import { getRandomNum } from 'src/lib/common/random';

const FilpCard = styled.div`
  cursor: pointer;
  background-color: transparent;
  width: 20%;
  height: 20vw;
  perspective: 1000px;
  user-select: none;
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 24px;
      font-weight: 500;
    }
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  &:hover .flip-card-inner {
    ${({ flip }) => flip === 1 && 'transform: rotateX(-180deg)'}
    ${({ flip }) => flip === 2 && 'transform: rotateY(-180deg)'}
    ${({ flip }) => flip === 3 && 'transform: rotateX(180deg)'}
    ${({ flip }) => flip === 4 && 'transform: rotateY(180deg)'}
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    word-break: break-all;
    padding: 19px;
    box-sizing: border-box;
  }
  
  .flip-card-front {
    background-color: rgba(${({ red }) => red}, ${({ green }) => green}, ${({ blue }) => blue}, ${({ alpha }) => alpha ? alpha : 0.2});
    color: rgba(${({ red }) => red}, ${({ green }) => green}, ${({ blue }) => blue}, ${({ alpha }) => alpha ? alpha : 0.5});;
  }
  
  .flip-card-back {
    background-color: rgba(${({ red }) => red}, ${({ green }) => green}, ${({ blue }) => blue}, ${({ alpha }) => alpha ? alpha : 1});
    color: white;
    ${({ flip }) => flip === 1 && 'transform: rotateX(-180deg)'}
    ${({ flip }) => flip === 2 && 'transform: rotateY(-180deg)'}
    ${({ flip }) => flip === 3 && 'transform: rotateX(180deg)'}
    ${({ flip }) => flip === 4 && 'transform: rotateY(180deg)'}
  }
`;

const UnflipCard = styled.div`
  cursor: pointer;
  background-color: #333;
  width: 20%;
  height: 20vw;
  user-select: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;


const Card = ({ data, suffleData }) => {
  const [selected, setSelected] = useState(false);
  const handleUnflipCardClick = (target) => () => {
    if (target === 'Shuffle') {
      suffleData();
    }
    if (target === 'Contact') {
      window.open('https://github.com/astomusic','_blank');
    }
  }

  const handleFlipCardClick = () => {
    console.log('123');
    setSelected(true);
  }

  return (
    <React.Fragment>
      {/* {selected && (
        <div>TEST</div>
      )} */}
      {data.flip &&(
        <FilpCard
          red={getRandomNum(50, 150)}
          green={getRandomNum(0, 100)}
          blue={getRandomNum(100, 250)}
          flip={getRandomNum(1, 4)}
          onClick={handleFlipCardClick}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front card">
              <h1>{`#${data.title}`}</h1> 
            </div>
            <div className="flip-card-back card">
              <h1>{data.desc}</h1> 
            </div>
          </div>
        </FilpCard>
      )}
      {!data.flip &&(
        <UnflipCard onClick={handleUnflipCardClick(data.title)}>
          <h1>{data.title}</h1> 
        </UnflipCard>
      )}
    </React.Fragment>
    
  );
};

export default Card;
