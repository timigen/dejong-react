import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'easy-peasy';
import store from './store';
import Dejong from './Dejong.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Dejong />
    </StoreProvider>
  </React.StrictMode>,
)
