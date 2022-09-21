
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import List from './List';
//import logo from './logo.svg';
import './App.css';

export default function BasicExample() {
  return (
    <Router>
      <div className="pink">
        <h2>React app 1</h2>
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard -> external1</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </Router>
  );
}


function Home() {
  return (
    <List colorClass="blue" />
  )
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const external = document.getElementById('external1')
  return ReactDOM.createPortal(
    (<div className="pink">
      <h2>Dashboard with list</h2>
      <List colorClass="olive" />
    </div>),
    external
  );
}
