import React, { useState } from 'react';
import styled from 'styled-components';

import myData from 'src/lib/constant/myData';

import Card from './Card';

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const Home = () => {
  const [data, setData] = useState(myData);

  const suffleData = () => {
    let j, x, i;
    let tempData = [...data];
    for (i = tempData.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = tempData[i - 1]; 
      tempData[i - 1] = tempData[j];
      tempData[j] = x;
    }
    setData(tempData);
  }

  return (
    <React.Fragment>
      <CardWrapper>
        {data.map(card => <Card key={card.index} data={card} suffleData={suffleData} />)}
      </CardWrapper>
    </React.Fragment>
  );
};

export default Home;
