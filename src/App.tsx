import React from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './helloworld';
import { DetailsListDocuments } from './Grid';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="">
        <DetailsListDocuments />
        <Helloworld />
      </body>
    </div>
  );
}

export default App;
