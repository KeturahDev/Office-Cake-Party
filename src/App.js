import './styles/App.css';
import {WebcamComponent} from './components/cam'
import Header from './components/Header'
import React from 'react';
import MainContent from './components/MainContent'


function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      {/* <WebcamComponent /> */}
    </div>
  );
}

export default App;
