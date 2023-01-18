import React, { Component, useState } from 'react';
import './App.css';

const App = () => {

  let [reflect, setReflect] = useState("");

  let reflectText = (e) =>{
    setReflect(
      reflect = e.target.value
    )
  }

    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo"  onChange={reflectText} />
        <p className="repeater">{reflect}</p>
      </div>
    );
  }

export default App;
