import React from "react";
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import styles from './App2.module.css';
import List from './List';

//console.log(`SSSSSSSSSS`, styles)
// window._test = () => alert(123);

function App2() {
  const external = document.getElementById('external2')
  return ReactDOM.createPortal(
    (<div className={`$[styles.App} ${styles.lightblue}`}>
      <h2>React app 2 -> external2 </h2>
      <List colorClass={styles.red} />
      <br />
      <button onClick={() => window._test()}>Call window._test() function</button>

      </div>
    ),
    external
  );
}

export default App2;
