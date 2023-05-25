import React, { useState } from 'react';
import Stage from './Stage.js';
import './style.css';

export default function App() {
  const [type, setType] = useState(1);
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setType(1)}>1</button>
        </li>
        <li>
          <button onClick={() => setType(4)}>4</button>
        </li>
        <li>
          <button onClick={() => setType(9)}>9</button>
        </li>
        <li>
          <button onClick={() => setType(16)}>16</button>
        </li>
      </ul>
      <Stage type={type} />
    </div>
  );
}
