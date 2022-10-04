import React from 'react';
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

function App() {
  const stateKim = useSelector((state) => state.reduxSample);
  return (
    <TodoProvider>
      <GlobalStyle />
      <div className="reduxSample">
        <p>{stateKim}</p>
      </div>
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
