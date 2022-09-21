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
        <h2>React app 2</h2>
        <List colorClass={styles.red} />
     </div>
    ),
    external
  );
}

export default App2;
