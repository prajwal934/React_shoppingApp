import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App'; 

import { NetflixRegister   } from './components/NetflixRegister';
import NetflixIndex from './components/NetflixIndex';
import reportWebVitals from './reportWebVitals';
import DataBinding from './components/DataBinding';
import Shoppingcomponent from './components/ShoppingComponent';
import EventHandlingComponent from './components/EventHandlingComponent';
import TwoWayBindingComponent from './components/TwoWayBinding';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shoppingcomponent/>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
