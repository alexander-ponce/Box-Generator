import React, { useState } from 'react';
import DisplayBox from './components/DisplayBox';
import FormBox from './components/FormBox';
import './App.css';

function App() {

    //    Used the object below to hold both the integer and the color together
  const [ colorArray, setColorArray ] = useState([])

  return (
    <div className="App">
    
      <h1>Box Generator</h1>
      <FormBox colorArray={ colorArray } setColorArray={ setColorArray } />
      <DisplayBox colorArray={ colorArray } />

    </div>
  );
}

export default App;
