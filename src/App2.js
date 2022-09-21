import React from "react";
import ReactDOM from 'react-dom';
import styles from './App2.module.css';
import List from './List';

function App2({ elementId }) {
  const external = document.getElementById(elementId)
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
