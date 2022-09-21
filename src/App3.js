import React from "react";
import ReactDOM from 'react-dom';


function App3() {
  const external = document.getElementById('external2')
  return ReactDOM.createPortal(
    (<div>
       <h2>React app 3 -> external2 </h2>
     </div>
    ),
    external
  );
}

export default App3;
