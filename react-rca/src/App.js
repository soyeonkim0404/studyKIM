import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';
import CounterContainer from './containers/CounterContainer';
import { useSelector } from 'react-redux';
import Modal from './components/Modal';
import UseModal from './components/UseModal';
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const SampleStyle = styled.div`
  width: 512px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  text-align: center;
  background: white;
  border-radius: 16px;
`;

function App() {
  const stateKim = useSelector((state) => state.reduxSample);
  const { openModal } = UseModal();
  const handleClick = () => {
    openModal(Modal, { foo: 'bar' });
  };
  return (
    <TodoProvider>
      <GlobalStyle />
      <SampleStyle>
        <p>{stateKim}</p>
      </SampleStyle>
      <button onClick={handleClick}>모달 버튼</button>
      <CounterContainer />
    </TodoProvider>
  );
}

export default App;
