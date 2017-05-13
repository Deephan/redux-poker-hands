import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import DealArea from './components/DealArea'
import ButtonsPanel from './components/ButtonsPanel'

// NOTE TO SELF: App would be the main container! The poker panel will
//               eventually be rendered from App!

/*

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

*/

ReactDOM.render(
  <DealArea/>,
  document.getElementById('root')
);

ReactDOM.render(
  <ButtonsPanel/>,
  document.getElementById('answer')
);
