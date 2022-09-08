import React from "react";
//import logo from './logo.svg';
import styles from './App2.module.css';
import List from './List';

console.log(`SSSSSSSSSS`, styles)

function App2() {
  return (
    <div className="App2">
      <h2>This is react app 2 </h2>
      <List colorClass={styles.red} />
    </div>
  );
}

export default App2;
