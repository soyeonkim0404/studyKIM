import React from 'react';
import styled from 'styled-components';

const CenterArea = styled.div`
  width: 512px;
  margin: 90px auto 0;
  text-align: center;
`;

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <CenterArea>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </CenterArea>
  );
}

export default Counter;
