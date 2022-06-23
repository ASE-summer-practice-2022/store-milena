import './App.css';
import cat1 from './img/cat1.jpg'
import cat2 from './img/cat2.jpg'
import cat3 from './img/cat3.jpg'
import cat4 from './img/cat4.jpg'

import React, { useState } from 'react';


const Choice = () => {
  const [count, setCount] = useState(0);
  return (
      <div>
        <p>За него {count} голос(ов)</p>
        <button onClick={() => setCount(count + 1)}>
          Проголосовать
        </button>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
      <p>Проголосуйте за лучшего котика</p>
      <div className="cat1">
          <img src={cat1} width="150px" height="170px"></img>
          {Choice()}
      </div>
      <div className="cat2">
          <img src={cat2} width="150px"></img>
          {Choice()}
      </div>
      <div className="cat3">
          <img src={cat3} width="150px" height="170px"></img>
          {Choice()}
      </div>
      <div className="cat4">
          <img src={cat4} width="150px"></img>
          {Choice()}
      </div>
      </body>
    </div>
  );
}

export default App;
