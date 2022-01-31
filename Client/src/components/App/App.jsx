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
    id: "he",
    value: 'Hebrew',
  },
  {
    id: "ar",
    value: 'Arabic',
  },
  {
    id: "en",
    value: 'English',
  },
  {
      id: "ru",
      value: 'Russian',
    },
    {
      id: "am",
      value: 'Amharic',
    }
];


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
      <Navbar />
      
      <Dropdown title="Select Language" items={items} multiSelect />
      <Route path="/" exact component={Home}>

      </Route>
        {/* <Song /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;