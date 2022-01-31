import React from 'react';
import './App.scss';
import Dropdown from '../Dropdown/Dropdown';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Song from '../Song/Song'
import SongCard from '../SongCard/SongCard'

const items = [
  {
    id: 1,
    value: 'Hebrew',
  },
  {
    id: 2,
    value: 'Arabic',
  },
  {
    id: 3,
    value: 'English',
  },
];

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>
       Mama Lisa
      </h1>
      <Dropdown title="Select Language" items={items} multiSelect />
      <Route path="/" exact component={Home}>

      </Route>
        {/* <Song /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;