import './App.css';
import styled from 'styled-components';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HistorySample from './HistorySample';
import CounterContainer from './containers/CounterContainer';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  ${(props) => props.huge && `width:10rem; height:10rem`}
`;

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
            exact
          >
            HOME
          </NavLink>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/history">HISTORY</Link>
        </li>
      </ul>
      <Circle color="blue" huge />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/history" component={HistorySample} />
      <CounterContainer />
    </div>
  );
}

export default App;
