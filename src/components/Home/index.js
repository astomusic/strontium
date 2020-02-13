import React from 'react';
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
  return (
    <React.Fragment>
      <CardWrapper>
        {myData.map(card => <Card key={card.index} data={card} />)}
      </CardWrapper>
    </React.Fragment>
  );
};

export default Home;
