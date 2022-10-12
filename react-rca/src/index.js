import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'; // 리덕스 import
import { Provider } from 'react-redux'; // 리덕스 import
import rootReducer from './modules';
import { logger } from 'redux-logger/src';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactModal from 'react-modal';
import ModalsProvider from './provider/ModalsProvider';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);
ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalsProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
