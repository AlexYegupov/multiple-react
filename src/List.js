import React, { useState } from 'react';


export default function List({ colorClass }) {
  const [list, setList] = useState(['item1', 'item2'])

  return (
    <div>
      <ul>
        { list.map(
            (item, i) => (
              <li key={i} className={ colorClass }>
                { item }
              </li>
            )
        )}
      </ul>
      <button onClick={ () => setList([...list, String(new Date())]) }>
        add list item
      </button>
    </div>
  );
}
