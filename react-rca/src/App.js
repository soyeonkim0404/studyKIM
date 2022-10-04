import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import CounterContainer from './containers/CounterContainer';
import { useSelector } from 'react-redux';

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
  return (
    <TodoProvider>
      <GlobalStyle />
      <SampleStyle>
        <p>{stateKim}</p>
      </SampleStyle>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <CounterContainer />
    </TodoProvider>
  );
}

export default App;
