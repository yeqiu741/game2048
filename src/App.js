import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Game2048 from './container/Game2048';
import confingureStore from './store/configureStore';

const store = confingureStore();

const App = () => (
  <Provider store={store}>
    <Game2048 />
  </Provider>
);


export default App;
