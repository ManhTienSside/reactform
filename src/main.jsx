import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//ket noi
import { Provider } from 'react-redux'
import { store } from './redux/store.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
