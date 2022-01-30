import React from 'react';
import './App.scss';
import Dropdown from '../Dropdown/Dropdown';
import Navbar from '../Navbar/Navbar';

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
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>
       Mama Lisa
      </h1>
      <Dropdown title="Select Language" items={items} multiSelect />
    </div>
  );
}

export default App;