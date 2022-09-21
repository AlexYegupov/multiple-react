import React from "react";
import ReactDOM from 'react-dom';


function App3({ elementId }) {
  const external = document.getElementById(elementId)
  return ReactDOM.createPortal(
    (<div>
       <h2>React app 3</h2>
     </div>
    ),
    external
  );
}

export default App3;
