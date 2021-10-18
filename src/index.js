import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


localStorage.getItem("theme_setting") ? document.documentElement.className = "dark" : document.documentElement.className = "light";


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

console.log("made_by_Piotr_Juras")