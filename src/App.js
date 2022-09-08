import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import List from './List';
import logo from './logo.svg';
import './App.css';

import AAA from './App.css';

console.log(`AAAAAAAAAAAAAAA`, AAA)

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <h2>This is react app 1</h2>
        <img src={logo} className="logo" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<List colorClass="blue" />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

/* import logo from './logo.svg';
 * import './App.css';
 *
 * function App() {
 *   return (
 *     <div className="App">
 *       <header className="App-header">
 *         <img src={logo} className="App-logo" alt="logo" />
 *         <p>
 *           Edit <code>src/App.js</code> and save to reload.
 *         </p>
 *         <a
 *           className="App-link"
 *           href="https://reactjs.org"
 *           target="_blank"
 *           rel="noopener noreferrer"
 *         >
 *           Learn React
 *         </a>
 *       </header>
 *     </div>
 *   );
 * }
 *
 * export default App;
 *  */
