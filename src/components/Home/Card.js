import React from 'react';
import styled from 'styled-components';

import { getRandomNum } from 'src/lib/common/random';

const StyledCard = styled.div`
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
  }
  
  .flip-card-front {
    background-color: rgba(${({ red }) => red}, ${({ green }) => green}, ${({ blue }) => blue}, ${({ alpha }) => alpha ? alpha : 0.2});
    color: black;
  }
  
  .flip-card-back {
    background-color: #333;
    color: white;
    ${({ flip }) => flip === 1 && 'transform: rotateX(-180deg)'}
    ${({ flip }) => flip === 2 && 'transform: rotateY(-180deg)'}
    ${({ flip }) => flip === 3 && 'transform: rotateX(180deg)'}
    ${({ flip }) => flip === 4 && 'transform: rotateY(180deg)'}
  }
`;


const Card = ({ data }) => {
  return (
    <React.Fragment>
      {data.flip &&(
        <StyledCard
          red={getRandomNum(50, 150)}
          green={getRandomNum(0, 100)}
          blue={getRandomNum(100, 250)}
          flip={getRandomNum(1, 4)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front card">
              <h1>{''}</h1> 
            </div>
            <div className="flip-card-back card">
              <h1>{`#${data.title}`}</h1> 
            </div>
          </div>
        </StyledCard>
      )}
      {!data.flip &&(
        <StyledCard
          red={0}
          green={0}
          blue={0}
          flip={1}
          alpha={0.5}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front card">
              <h1>{data.title}</h1> 
            </div>
            <div className="flip-card-back card">
              <h1>{`${data.desc}`}</h1> 
            </div>
          </div>
        </StyledCard>
      )}
    </React.Fragment>
    
  );
};

export default Card;
