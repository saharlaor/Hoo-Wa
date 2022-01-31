import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Dropdown from "../Dropdown/Dropdown";
import Songs from "../../pages/Songs";
import "./App.scss";

const items = [
  {
    id: 1,
    value: "Hebrew",
  },
  {
    id: 2,
    value: "Arabic",
  },
  {
    id: 3,
    value: "English",
  },
];

function App() {
  return (
    <div className="container">
      <Navbar />
      <Dropdown title={"Select Language"} items={items} multiSelect />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/songs/*" element={<Songs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
