import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css'
import { handsMap } from './components/Helpers';


const initialState = { 
  cards:[{id:1,suit:'S',rank:7},{id:2,suit:'H',rank:2},{id:3,suit:'C',rank:3},{id:4,suit:'H',rank:4},{id:5,suit:'D',rank:12}],
  result: {result:1302540/2598960*100,numerator:1302540,denominator:2598960,description: handsMap[0]}
};

const store = createStore(rootReducer,initialState,applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)