import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from "react-redux";
import { store } from 'Redux/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="login-test">
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);